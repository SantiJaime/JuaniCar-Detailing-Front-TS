import { Link, BrowserRouter as Router } from "react-router-dom";
import RoutesView from "./routes/RoutesView";
import NavbarComp from "./components/NavbarComp";
import FooterComp from "./components/FooterComp";
import Aos from "aos";
import { PHONE_NUMBER } from "./constants/const";
import { WhatsappIcon } from "./components/Icons";
import { Toaster } from "sonner";

const App = () => {
  Aos.init({
    duration: 1200,
    once: true,
  });
  return (
    <Router>
      <div className="App">
        <NavbarComp />
        <main>
          <Toaster richColors position="top-right" />
          <RoutesView />
        </main>
        <Link
          to={`https://wa.me/${PHONE_NUMBER}`}
          target="_blank"
          className="btn-wsp transition-all"
          aria-label="Envíar mensaje por Whatsapp"
        >
          <WhatsappIcon className="size-8" />
        </Link>
        <FooterComp />
      </div>
    </Router>
  );
};

export default App;
