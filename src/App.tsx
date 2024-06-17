import { Link, BrowserRouter as Router } from "react-router-dom";
import RoutesView from "./routes/RoutesView";
import NavbarComp from "./components/NavbarComp";
import FooterComp from "./components/FooterComp";
import Aos from "aos";
import { PHONE_NUMBER } from "./constants/const";
import { WhatsappIcon } from "./components/Icons";

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
            className="btn-wsp transition-all"
          >
            <WhatsappIcon className="size-8" />
          </Link>
        </main>
        <FooterComp />
      </div>
    </Router>
  );
};

export default App;
