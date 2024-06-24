import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Col } from "react-bootstrap";
import ServiceView from "./ServiceView";

const CardComp: React.FC<ServiceProps> = ({ service }) => {
  return (
    <Col lg={4} md={6} sm={12} className="my-3 flex justify-center" data-aos="flip-left">
      <Card className="mt-6 w-96 bg-gray-900 text-gray-50">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={service.imagen} alt={service.nombre} />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="white" className="mb-2">
            {service.nombre}
          </Typography>
          <Typography>${service.precio}</Typography>
        </CardBody>
        <CardFooter className="flex justify-around pt-0">
          <Button
            variant="filled"
            color="white"
            className="flex items-center gap-1"
          >
            <CalendarDaysIcon className="size-5" />
            <span>Solicitar turno</span>
          </Button>
          <ServiceView service={service} />
        </CardFooter>
      </Card>
    </Col>
  );
};

export default CardComp;
