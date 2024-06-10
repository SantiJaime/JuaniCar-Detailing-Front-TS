import { HomeIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Container className="my-8 flex flex-col items-center gap-2">
      <Image
        src="/error404.png"
        alt="Error404 logo"
        width={"60%"}
        className="rounded-lg"
        fluid
      />
      <Button variant="gradient" size="lg">
        <Link className="flex items-center gap-2" to={"/"}>
          <HomeIcon className="size-6" />
          <span>Volver al inicio</span>
        </Link>
      </Button>
    </Container>
  );
};

export default ErrorPage;
