import { Col, Container, Row } from "react-bootstrap";
import {
  CalendarDaysIcon,
  ChatBubbleBottomCenterTextIcon,
  ClockIcon,
  UserCircleIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
import { Form, Formik } from "formik";
import { SCHEDULES, SERVICES_NAMES, VEHICLES } from "../constants/const";
import InputComp from "../components/InputComp";
import SelectComp from "../components/SelectComp";
import { errorTurnSchema } from "../utils/validationSchemas";
import { CarIcon, EmailIcon } from "../components/Icons";

const TurnsPage = () => {
  const classes = "size-5 text-gray-50";

  return (
    <Container className="my-8 flex flex-col items-center">
      <Typography variant="h2" color="white" data-aos="flip-down">
        Rellena el formulario para solicitar un turno
      </Typography>
      <Formik
        initialValues={{
          email: "",
          nombre: "",
          vehiculo: "",
          servicio: "",
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
            <Row className="divFecha">
              <Col lg={6}>
                <InputComp
                  type="date"
                  name="fecha"
                  id="dateId"
                  label="Fecha"
                  icon={<CalendarDaysIcon className={classes} />}
                  placeholder=""
                  onChange={handleChange}
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
                  options={SCHEDULES}
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
    </Container>
  );
};

export default TurnsPage;
