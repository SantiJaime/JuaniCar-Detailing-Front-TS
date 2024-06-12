import { Typography } from "@material-tailwind/react";
import { Container, Row } from "react-bootstrap";
import CardComp from "../components/CardComp";
import { SERVICES } from "../constants/const";
import { type Service } from "src/types";

const ServicesPage = () => {
  return (
    <Container className="my-4 text-gray-50">
      <Typography variant="h1">Nuestros servicios</Typography>
      <hr />
      <Row>
        {SERVICES.map((service: Service, index: number) => (
          <CardComp key={index} service={service} />
        ))}
      </Row>
    </Container>
  );
};

export default ServicesPage;
