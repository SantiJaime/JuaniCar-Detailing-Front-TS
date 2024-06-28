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
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Image } from "react-bootstrap";
import {
  ArrowRightStartOnRectangleIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";

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
const NAVIGATION_ADMIN = [
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
    name: "Panel de administrador",
    href: "/panel-administrador",
    icon: <Cog8ToothIcon className="size-5" />,
  },
];

const NavbarComp = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    token: sessionStorage.getItem("token") || "",
    role: sessionStorage.getItem("token") || "",
  });
  const [openNav, setOpenNav] = useState(false);

  const token = sessionStorage.getItem("token") || "";
  const role = sessionStorage.getItem("role") || "";

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
    navigate("/");
  };

  useEffect(() => {
    setUserInfo({ token, role });
  }, [token, role]);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <div className="my-8 flex flex-col gap-3 lg:my-0 lg:flex-row lg:items-center">
      {userInfo.token && userInfo.role ? (
        <>
          {NAVIGATION_ADMIN.map((item) => (
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
          <button
            className="flex items-center gap-2 rounded-lg p-1 font-medium hover:bg-blue-gray-200/20"
            type="button"
            aria-label="Cerrar sesión"
            onClick={handleLogout}
          >
            <ArrowRightStartOnRectangleIcon className="size-5 text-gray-50" />
            <span>Cerrar sesión</span>
          </button>
        </>
      ) : (
        NAVIGATION.map((item) => (
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
        ))
      )}
    </div>
  );

  return (
    <Navbar
      className="mx-auto rounded-none border-0 bg-gray-900/100 px-4 py-2 lg:rounded-lg lg:px-8 lg:py-4"
      data-aos="fade-down"
    >
      <div className="container mx-auto flex items-center">
        <Link to={"/"} className="link-container">
          <Image
            src="/JuaniLogo.png"
            alt="JuaniCar Detailing Logo"
            className="size-24"
            fluid
          />
        </Link>
        <div className="mx-auto hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto size-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav((prevState) => !prevState)}
        >
          {openNav ? (
            <XMarkIcon className="size-6" />
          ) : (
            <Bars3Icon className="size-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </Collapse>
    </Navbar>
  );
};
export default NavbarComp;
