import { Typography } from "@material-tailwind/react";
import { Container, Row } from "react-bootstrap";
import CardComp from "../components/CardComp";
import useServices from "../hooks/useServices";

const ServicesPage = () => {
  const { services } = useServices()
  return (
    <Container className="my-4 text-gray-50">
      <Typography variant="h1">Nuestros servicios</Typography>
      <hr />
      <Row>
        {services.map((service: Service) => (
          <CardComp key={service._id} service={service} />
        ))}
      </Row>
    </Container>
  );
};

export default ServicesPage;
