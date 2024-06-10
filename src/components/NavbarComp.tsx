import { useEffect, useState } from "react";
import { Navbar, IconButton, Collapse } from "@material-tailwind/react";
import {
  Bars3Icon,
  ClockIcon,
  HomeIcon,
  PhoneIcon,
  WrenchScrewdriverIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import { Link, useLocation } from "react-router-dom";
import { Image } from "react-bootstrap";

const NAVIGATION = [
  {
    name: "Inicio",
    href: "/",
    icon: <HomeIcon className="size-5" />,
  },
  {
    name: "Servicios",
    href: "/servicios",
    icon: <WrenchScrewdriverIcon className="size-5" />,
  },
  {
    name: "Solicitar turno",
    href: "/turnos",
    icon: <ClockIcon className="size-5" />,
  },
  {
    name: "Contacto",
    href: "/contacto",
    icon: <PhoneIcon className="size-5" />,
  },
];

const NavbarComp = () => {
  const location = useLocation();

  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <div className="my-8 flex flex-col gap-3 lg:my-0 lg:flex-row lg:items-center">
      {NAVIGATION.map((item) => (
        <Link
          to={item.href}
          className={`flex items-center gap-2 rounded-lg p-1 font-medium hover:bg-blue-gray-200/20 ${
            location.pathname === item.href && "bg-blue-gray-50/10"
          }`}
          key={item.name}
        >
          {item.icon}
          <span>{item.name}</span>
        </Link>
      ))}
    </div>
  );

  return (
    <Navbar className="mx-auto rounded-none rounded-t-lg border-0 bg-gray-900/100 px-4 py-2 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center">
        <Link to={"/"} className="link-container">
          <Image
            src="/logo.png"
            alt="JuaniCar Detailing Logo"
            className="size-24"
            fluid
          />
        </Link>
        <div className="mx-auto hidden lg:block">{navList}</div>
        {/* <div className="flex items-center gap-x-1">
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
          >
            <span>Log In</span>
          </Button>
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
          >
            <span>Sign in</span>
          </Button>
        </div> */}
        <IconButton
          variant="text"
          className="ml-auto size-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="size-6" />
          ) : (
            <Bars3Icon className="size-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          {/* <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div> */}
        </div>
      </Collapse>
    </Navbar>
  );
};
export default NavbarComp;
