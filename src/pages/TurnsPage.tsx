import { Col, Container, Row } from "react-bootstrap";
import {
  AtSymbolIcon,
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
              icon={<AtSymbolIcon className={classes} />}
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
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-car-front text-gray-50"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM4.862 4.276 3.906 6.19a.51.51 0 0 0 .497.731c.91-.073 2.35-.17 3.597-.17s2.688.097 3.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 10.691 4H5.309a.5.5 0 0 0-.447.276" />
                  <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM4.82 3a1.5 1.5 0 0 0-1.379.91l-.792 1.847a1.8 1.8 0 0 1-.853.904.8.8 0 0 0-.43.564L1.03 8.904a1.5 1.5 0 0 0-.03.294v.413c0 .796.62 1.448 1.408 1.484 1.555.07 3.786.155 5.592.155s4.037-.084 5.592-.155A1.48 1.48 0 0 0 15 9.611v-.413q0-.148-.03-.294l-.335-1.68a.8.8 0 0 0-.43-.563 1.8 1.8 0 0 1-.853-.904l-.792-1.848A1.5 1.5 0 0 0 11.18 3z" />
                </svg>
              }
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
