import { CalendarDaysIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardComp from "../components/CardComp";
import { type Service } from "src/types";
import { SERVICES } from "../constants/const";

const HomePage = () => {
  return (
    <>
      <Container
        className="sectionBg flex flex-col justify-end p-0"
        fluid
        data-aos="fade-up"
      >
        <section className="ps-6" data-aos="fade-right">
          <Typography variant="h1" color="white" className="fontTitle">
            Juani Car Detailing
          </Typography>
          <Typography variant="lead" color="white">
            Dando servicio en San Miguel de Tucumán, Tucumán, Argentina.
          </Typography>
          <Typography variant="lead" color="white">
            Cuando dejen los vehículos como nosotros, nos etiquetan 😉
          </Typography>
          <Row className="my-4 items-center">
            <Col lg={2} md={3} sm={3} className="rowButtons">
              <Button variant="gradient" className="rounded-full">
                <Link to={"/turnos"} className="flex items-center gap-2">
                  <CalendarDaysIcon className="size-6" />
                  <span>Solicitar turno ahora</span>
                </Link>
              </Button>
            </Col>
            <Col lg={2} md={3} sm={3} className="rowButtons">
              <Button variant="gradient" className="rounded-full">
                <Link to={"/contacto"} className="flex items-center gap-2">
                  <PhoneIcon className="size-6" />
                  <span>Contáctame</span>
                </Link>
              </Button>
            </Col>
          </Row>
        </section>
      </Container>
      <Container className="mt-8 text-gray-50" fluid data-aos="fade-up">
        <Typography variant="h1">Nuestros servicios destacados</Typography>
        <hr />
        <Row>
          {SERVICES.map((service: Service, index: number) => (
            <CardComp key={index} service={service} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
