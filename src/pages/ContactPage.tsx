import { Button, Typography } from "@material-tailwind/react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PHONE_NUMBER } from "../constants/const";

const ContactPage = () => {
  return (
    <Container className="my-3 text-gray-50">
      <Typography variant="h2" className="my-3 text-center" data-aos="zoom-out">
        Información de contacto
      </Typography>
      <hr />
      <Row className="items-center">
        <Col sm={12} md={6} lg={6} data-aos="fade-right">
          <Row>
            <Col sm={12} md={12} lg={4} className="my-3">
              <h5 className="font-bold underline">Ubicación</h5>
              <ul>
                <li>Dirección: Lavalle 34</li>
                <li>San Miguel de Tucumán (T4000) - Tucumán, Argentina</li>
              </ul>
            </Col>
            <Col sm={12} md={12} lg={4} className="my-3">
              <h5 className="font-bold underline">Contacto</h5>
              <ul>
                <li>Teléfono: {PHONE_NUMBER}</li>
              </ul>
            </Col>
            <Col sm={12} md={12} lg={4} className="my-3">
              <h5 className="font-bold underline">Horarios de atención</h5>
              <ul>
                <li>Sábados: 09:00 a 17:00</li>
                <li>Domingos: 09:00 a 17:00</li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col
          sm={12}
          md={6}
          lg={6}
          data-aos="fade-left"
          className="my-3 flex justify-between gap-2"
        >
          <Button
            variant="text"
            className="bg-gray-800 text-gray-50 hover:bg-green-500/50"
            fullWidth
          >
            <Link
              to={`https://wa.me/${PHONE_NUMBER}`}
              target="_blank"
              className="flex flex-col items-center justify-center gap-2"
            >
              <i className="bi bi-whatsapp fs-1"></i>
              <span className="text-lg normal-case">Enviar mensaje</span>
            </Link>
          </Button>
          <Button
            variant="text"
            className="buttonWhite bg-gray-800 text-gray-50"
            fullWidth
          >
            <Link
              to="https://www.instagram.com/juanicardetailing?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              className="flex flex-col items-center justify-center gap-2"
            >
              <i className="bi bi-instagram fs-1"></i>
              <span className="text-lg normal-case">Instagram</span>
            </Link>
          </Button>
        </Col>
      </Row>
      <hr className="mb-3" />
      <Row>
        <Col sm={12}>
          <iframe
            title="maps"
            data-aos="fade-up"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.9708041581453!2d-65.1997062!3d-26.8408809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c07081f8303%3A0xa2385039d83d4df7!2sLavalle%2034%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1718055274861!5m2!1ses-419!2sar"
            className="w-full rounded-lg"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
