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
import { getAvailableSchedules } from "../helpers/queriesTurns";
import { toast } from "sonner";

interface Props {
  serviceName?: string;
}

const TurnFormComp: React.FC<Props> = ({ serviceName }) => {
  const [date, setDate] = useState<string>("");
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
        nombre: "",
        vehiculo: "",
        servicio: serviceName || "",
        fecha: "",
        horario: "",
        detalles: "",
      }}
      onSubmit={(values) => console.log(values)}
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
            name="nombre"
            type="text"
            icon={<UserCircleIcon className={classes} />}
            onChange={handleChange}
            id="nameId"
            placeholder="Ej: Juan Martinez"
            label="Nombre y apellido"
            value={values.nombre}
            errors={errors.nombre}
            touched={touched.nombre}
          />
          <SelectComp
            label="Tipo de vehículo"
            options={VEHICLES}
            id="vehicleId"
            onChange={handleChange}
            name="vehiculo"
            value={values.vehiculo}
            icon={<CarIcon className={classes} />}
            errors={errors.vehiculo}
            touched={touched.vehiculo}
          />
          {serviceName ? (
            <InputComp
              type="text"
              label="Servicio a solicitar"
              id="selectedServiceId"
              onChange={handleChange}
              placeholder={serviceName}
              name="servicio"
              value={serviceName}
              icon={<WrenchScrewdriverIcon className={classes} />}
              disabled={true}
            />
          ) : (
            <SelectComp
              label="Servicio a solicitar"
              options={SERVICES_NAMES}
              id="serviceId"
              onChange={handleChange}
              name="servicio"
              value={values.servicio}
              icon={<WrenchScrewdriverIcon className={classes} />}
              errors={errors.servicio}
              touched={touched.servicio}
            />
          )}
          <Row className="divFecha">
            <Col lg={6}>
              <SelectComp
                options={weekendDates}
                name="fecha"
                id="dateId"
                label="Fecha"
                icon={<CalendarDaysIcon className={classes} />}
                onChange={(event) => {
                  handleChange(event);
                  const date = event.target.value.split("- ")[1];
                  setDate(date);
                }}
                value={values.fecha}
                errors={errors.fecha}
                touched={touched.fecha}
              />
            </Col>
            <Col lg={6}>
              <SelectComp
                name="horario"
                id="schedulesId"
                label="Horarios"
                icon={<ClockIcon className={classes} />}
                options={availableSchedules}
                onChange={handleChange}
                value={values.horario}
                errors={errors.horario}
                touched={touched.horario}
              />
            </Col>
          </Row>
          <InputComp
            label="Detalles (opcionales)"
            name="detalles"
            id="detailsId"
            type="textarea"
            placeholder="Deje un breve mensaje en caso de necesitarlo"
            onChange={handleChange}
            value={values.detalles}
            icon={<ChatBubbleBottomCenterTextIcon className={classes} />}
            errors={errors.detalles}
            touched={touched.detalles}
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
