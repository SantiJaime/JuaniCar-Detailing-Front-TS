import { Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import ContactPage from "../pages/ContactPage";
import TurnsPage from "../pages/TurnsPage";
import AdminLogin from "../pages/AdminLogin";
import AdminPanel from "../pages/AdminPanel";
import PrivateRoutes from "../components/PrivateRoutes";

const RoutesView = () => {
  return (
    <Routes>
      <Route
        path="/panel-administrador"
        element={
          <PrivateRoutes>
            <AdminPanel />
          </PrivateRoutes>
        }
      />
      <Route path="/administrador" element={<AdminLogin />} />
      <Route path="/servicios" element={<ServicesPage />} />
      <Route path="/contacto" element={<ContactPage />} />
      <Route path="/turnos" element={<TurnsPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default RoutesView;
