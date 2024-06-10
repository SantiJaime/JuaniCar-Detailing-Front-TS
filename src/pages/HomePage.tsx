import { CalendarDaysIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardComp from "../components/CardComp";
import { type Service } from "src/types";

const SERVICES = [
  {
    nombre: "Lavado premium",
    descripcion:
      "Lavado que incluye enjabonado, enjuagado y encerado del vehículo",
    img: "https://imgfz.com/i/tDWQMeN.png",
    precio: 5000,
  },
  {
    nombre: "Limpieza de tapizados",
    descripcion: "Limpieza de cubiertas de los asientos del vehículo",
    img: "https://imgfz.com/i/G9ixErn.png",
    precio: 3000,
  },
  {
    nombre: "Abrillantado y sellado",
    descripcion:
      "Aplicación de sellador que permitirá realzar el color y aumentar el brillo, prologar el lavado y proteger al vehículo de los factores climáticos.",
    img: "https://imgfz.com/i/LPlORAh.png",
    precio: 7000,
  },
  {
    nombre: "Limpieza de motor",
    descripcion: "Limpieza de la parte interna del vehículo.",
    img: "https://www.grupoherres.com.mx/wp-content/uploads/2019/05/actividades-mantenimiento-motores.jpg",
    precio: 6500,
  },
  {
    nombre: "Restauración de ópticas",
    descripcion:
      "Limpieza y pulido de ópticas, con un resultado completamente transparente.",
    img: "https://imgfz.com/i/C6Pu4hX.png",
    precio: 4000,
  },
];

const HomePage = () => {
  return (
    <>
      <Container className="sectionBg flex flex-col justify-end p-0" fluid>
        <section className="ps-6">
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
      <Container className="mt-8 text-gray-50" fluid>
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
