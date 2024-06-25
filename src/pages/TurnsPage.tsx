import { Typography } from "@material-tailwind/react";
import { Container } from "react-bootstrap";
import TurnFormComp from "../components/TurnFormComp";

const TurnsPage = () => {
  return (
    <Container className="my-8 flex flex-col items-center">
      <Typography variant="h2" color="white" data-aos="flip-down">
        Rellena el formulario para solicitar un turno
      </Typography>
      <TurnFormComp />
    </Container>
  );
};

export default TurnsPage;
