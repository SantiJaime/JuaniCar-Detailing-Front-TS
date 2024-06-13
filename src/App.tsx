import { Link, BrowserRouter as Router } from "react-router-dom";
import RoutesView from "./routes/RoutesView";
import NavbarComp from "./components/NavbarComp";
import FooterComp from "./components/FooterComp";
import Aos from "aos";
import { PHONE_NUMBER } from "./constants/const";

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
          <RoutesView />
          <Link
            to={`https://wa.me/${PHONE_NUMBER}`}
            target="_blank"
            className="btn-wsp text-center transition-all"
          >
            <i className="bi bi-whatsapp"></i>
          </Link>
        </main>
        <FooterComp />
      </div>
    </Router>
  );
};

export default App;
