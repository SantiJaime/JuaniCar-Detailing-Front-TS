import { Spinner, Typography } from "@material-tailwind/react";
import { Container, Row } from "react-bootstrap";
import CardComp from "../components/CardComp";
import useServices from "../hooks/useServices";

const ServicesPage = () => {
  const { services, isLoading } = useServices();
  return (
    <Container className="my-4 text-gray-50">
      <Typography variant="h1">Nuestros servicios</Typography>
      <hr />
      <Row>
        {isLoading ? (
          <div className="mt-3 flex flex-col items-center justify-center gap-2">
            <Spinner className="size-12"/>
            <Typography variant="h4">Cargando servicios...</Typography>
          </div>
        ) : (
          services.map((service: Service) => (
            <CardComp key={service._id} service={service} />
          ))
        )}
      </Row>
    </Container>
  );
};

export default ServicesPage;
