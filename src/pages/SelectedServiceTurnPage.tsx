import { Typography } from "@material-tailwind/react";
import { Container } from "react-bootstrap";
import TurnFormComp from "../components/TurnFormComp";
import { useParams } from "react-router-dom";
import { getOneService } from "../helpers/queriesServices";
import { toast } from "sonner";
import { useEffect, useState } from "react";

const SelectedServiceTurnPage = () => {
  const params = useParams();
  const [service, setService] = useState<Service>({
    _id: "",
    nombre: "",
    imagen: "",
    precio: 0,
    descripcion: "",
  });

  useEffect(() => {
    if (params.id) {
      getOneService(params.id)
        .then((res) => {
          if (res instanceof Error) {
            toast.error(res.message);
            return;
          } else if (!res) return;
          setService(res);
        })
        .catch((err) => toast.error(err.message));
    }
  }, [params.id]);
  return (
    <Container className="my-8 flex flex-col items-center">
      <Typography variant="h2" color="white" data-aos="flip-down">
        Rellena el formulario para solicitar un turno
      </Typography>
      <TurnFormComp serviceName={service.nombre} />
    </Container>
  );
};

export default SelectedServiceTurnPage;
