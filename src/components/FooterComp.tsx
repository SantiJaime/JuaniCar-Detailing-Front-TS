import { PhoneIcon } from "@heroicons/react/16/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComp = () => {
  return (
    <footer className="w-full bg-gray-900/100 p-8 text-gray-50">
      <div className="flex flex-row flex-wrap items-center justify-center gap-x-12 gap-y-6 text-center md:justify-between">
        <Link to={"/"} className="link-container">
          <Image
            src="/JuaniLogo.png"
            alt="JuaniCar Detailing Logo"
            className="size-28"
            fluid
          />
        </Link>
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
          <li>
            <Link
              to={"/nosotros"}
              className="flex items-center gap-1 transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              <InformationCircleIcon className="size-5" />
              <span className="font-bold">Sobre nosotros</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/contacto"}
              className="flex items-center gap-1 transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              <PhoneIcon className="size-5" />
              <span className="font-bold">Contacto</span>
            </Link>
          </li>
        </ul>
      </div>
          <Typography variant="small" className="footerTextAlign">Atendemos solo fines de semana</Typography>
      <hr className="my-6 border-blue-gray-50" />
      <Typography color="white" className="text-center font-normal">
        &copy; 2024 Juani Car Detailing
      </Typography>
    </footer>
  );
};

export default FooterComp;
