import { Col, Row } from "react-bootstrap";
import {
  CalendarDaysIcon,
  ChatBubbleBottomCenterTextIcon,
  ClockIcon,
  UserCircleIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";
import { Form, Formik } from "formik";
import { SERVICES_NAMES, VEHICLES } from "../constants/const";
import InputComp from "./InputComp";
import SelectComp from "./SelectComp";
import { errorTurnSchema } from "../utils/validationSchemas";
import { CarIcon, EmailIcon } from "./Icons";
import { addWeeks, format, nextSaturday, nextSunday } from "date-fns";
import { es } from "date-fns/locale";
import { useEffect, useState } from "react";
import { createTurn, getAvailableSchedules } from "../helpers/queriesTurns";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

interface Props {
  serviceName?: string;
}

const TurnFormComp: React.FC<Props> = ({ serviceName }) => {
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [availableSchedules, setAvailableSchedules] = useState<string[]>([
    "Seleccione una fecha primero",
  ]);
  const [weekendDates, setWeekendDates] = useState<string[]>([]);
  const classes = "size-5 text-gray-50";

  useEffect(() => {
    const getNextThreeWeekends = () => {
      const weekends: string[] = ["Sin seleccionar opción"];
      const currentSaturday = nextSaturday(new Date());

      for (let i = 0; i < 3; i++) {
        const saturday = addWeeks(currentSaturday, i);
        const sunday = nextSunday(saturday);

        const formattedSaturday = format(saturday, "'Sábado' - dd/MM", {
          locale: es,
        });
        const formattedSunday = format(sunday, "'Domingo' - dd/MM", {
          locale: es,
        });

        weekends.push(formattedSaturday);
        weekends.push(formattedSunday);
      }

      return weekends;
    };

    const dates = getNextThreeWeekends();
    setWeekendDates(dates);
  }, []);

  const handleCreateTurn = async (values: ValuesTurn) => {
    if (!values.details) {
      values.details = "Sin detalles adicionales";
    }
    try {
      const res = await createTurn(values);
      if (res instanceof Error) {
        toast.error(res.message);
        return;
      }

      toast.success(res, {
        description: "Nos pondremos en contacto pronto",
      });
      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  useEffect(() => {
    if (date) {
      getAvailableSchedules(date)
        .then((res) => {
          if (res instanceof Error) {
            toast.error(res.message);
            return;
          }
          setAvailableSchedules(["Sin seleccionar horario", ...res]);
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
  }, [date]);

  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        vehicle: "",
        service: serviceName || "",
        date: "",
        hour: "",
        details: "",
      }}
      onSubmit={(values) => handleCreateTurn(values)}
      validationSchema={errorTurnSchema}
    >
      {({ values, errors, touched, handleChange, handleSubmit }) => (
        <Form
          className="formWidth mt-3"
          data-aos="zoom-in"
          onSubmit={handleSubmit}
        >
          <InputComp
            name="email"
            type="email"
            icon={<EmailIcon className={classes} />}
            onChange={handleChange}
            id="emailId"
            placeholder="name@example.com"
            label="Correo electrónico"
            value={values.email}
            errors={errors.email}
            touched={touched.email}
          />
          <InputComp
            name="name"
            type="text"
            icon={<UserCircleIcon className={classes} />}
            onChange={handleChange}
            id="nameId"
            placeholder="Ej: Juan Martinez"
            label="Nombre y apellido"
            value={values.name}
            errors={errors.name}
            touched={touched.name}
          />
          <SelectComp
            label="Tipo de vehículo"
            options={VEHICLES}
            id="vehicleId"
            onChange={handleChange}
            name="vehicle"
            value={values.vehicle}
            icon={<CarIcon className={classes} />}
            errors={errors.vehicle}
            touched={touched.vehicle}
          />

          <SelectComp
            label="Servicio a solicitar"
            options={SERVICES_NAMES}
            id="serviceId"
            onChange={handleChange}
            name="service"
            value={
              serviceName ? (values.service = serviceName) : values.service
            }
            icon={<WrenchScrewdriverIcon className={classes} />}
            errors={errors.service}
            touched={touched.service}
            disabled={serviceName ? true : false}
          />
          <Row className="divFecha">
            <Col lg={6}>
              <SelectComp
                options={weekendDates}
                name="date"
                id="dateId"
                label="Fecha"
                icon={<CalendarDaysIcon className={classes} />}
                onChange={(event) => {
                  handleChange(event);
                  const date = event.target.value.split("- ")[1];
                  setDate(date);
                }}
                value={values.date}
                errors={errors.date}
                touched={touched.date}
              />
            </Col>
            <Col lg={6}>
              <SelectComp
                name="hour"
                id="schedulesId"
                label="Horarios"
                icon={<ClockIcon className={classes} />}
                options={availableSchedules}
                onChange={handleChange}
                value={values.hour}
                errors={errors.hour}
                touched={touched.hour}
              />
            </Col>
          </Row>
          <InputComp
            label="Detalles (opcionales)"
            name="details"
            id="detailsId"
            type="textarea"
            placeholder="Deje un breve mensaje en caso de necesitarlo"
            onChange={handleChange}
            value={values.details}
            icon={<ChatBubbleBottomCenterTextIcon className={classes} />}
            errors={errors.details}
            touched={touched.details}
          />
          <Button
            variant="filled"
            color="white"
            type="submit"
            className="flex items-center justify-center gap-1"
            fullWidth
          >
            <CalendarDaysIcon className="size-5" />
            <span>Solicitar turno</span>
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default TurnFormComp;
