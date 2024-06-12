import {
  ArrowLongRightIcon,
  CalendarDaysIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const ServiceView: React.FC<ServiceProps> = ({ service }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <Button
        variant="text"
        onClick={handleShow}
        className="flex items-center gap-1 text-gray-50 hover:bg-gray-50/10"
      >
        <span>Ver más</span>
        <ArrowLongRightIcon className="size-5" />
      </Button>

      <Modal show={show} onHide={handleClose} centered size="xl" className="modal-open">
        <div className="bg-gray-900">
          <Modal.Body>
            <Row>
              <Col sm={5}>
                <Image
                  src={service.img}
                  alt={service.nombre}
                  className="rounded-lg object-cover object-center"
                  width={"100%"}
                />
              </Col>
              <Col sm={7}>
                <Row className="h-full flex-col justify-between">
                  <Col sm={12}>
                    <div className="flex justify-between">
                      <Typography variant="h2" color="white">
                        {service.nombre}
                      </Typography>
                      <Button variant="text" className="h-min p-2" onClick={handleClose}>
                        <XMarkIcon className="size-5 text-gray-50" />
                      </Button>
                    </div>
                    <Typography variant="h5" className="mt-3 text-gray-400">
                      ${service.precio}
                    </Typography>
                    <hr className="my-3 text-gray-50" />
                    <Typography variant="paragraph" color="white">
                      {service.descripcion}
                    </Typography>
                  </Col>
                  <Col sm={12}>
                    <Button
                      variant="gradient"
                      color="deep-purple"
                      className="flex items-center justify-center gap-2 normal-case"
                      fullWidth
                    >
                      <CalendarDaysIcon className="size-8" />
                      <span className="text-lg">Solicitar turno</span>
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default ServiceView;
