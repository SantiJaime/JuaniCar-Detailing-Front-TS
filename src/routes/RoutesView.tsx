import { Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import ContactPage from "../pages/ContactPage";

const RoutesView = () => {
  return (
    <Routes>
      <Route path="/servicios" element={<ServicesPage />} />
      <Route path="/contacto" element={<ContactPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default RoutesView;
