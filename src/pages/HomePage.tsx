import { CalendarDaysIcon, ListBulletIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardComp from "../components/CardComp";
import useServices from "../hooks/useServices";

const HomePage = () => {
  const { services } = useServices();

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
            <div className="rowButtons flex gap-2">
              <Button variant="gradient" className="my-2 rounded-full">
                <Link to={"/turnos"} className="flex items-center gap-2">
                  <CalendarDaysIcon className="size-6" />
                  <span>Solicitar turno ahora</span>
                </Link>
              </Button>
              <Button variant="gradient" className="my-2 rounded-full">
                <Link to={"/contacto"} className="flex items-center gap-2">
                  <PhoneIcon className="size-6" />
                  <span>Contáctame</span>
                </Link>
              </Button>
            </div>
        </section>
      </Container>
      <Container className="mt-8 text-gray-50" fluid data-aos="fade-up">
        <Typography variant="h1">Nuestros servicios</Typography>
        <hr />
        <Row>
          {services.slice(0, 3).map((service: Service) => (
            <CardComp key={service._id} service={service} />
          ))}
        </Row>
        <div className="mb-3 flex justify-center">
          <Button color="white" className="rounded-full">
            <Link to={"/servicios"} className="flex items-center gap-2">
            <ListBulletIcon className="size-5"/>
            <span>Ver todos</span>
            </Link>
          </Button>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
