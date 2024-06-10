import { BrowserRouter as Router } from "react-router-dom"
import RoutesView from "./routes/RoutesView"
import NavbarComp from "./components/NavbarComp"
import FooterComp from "./components/FooterComp"


const App = () => {
  return (
    <Router>
      <div className="App">
        <NavbarComp />
        <main>
          <RoutesView />
        </main>
        <FooterComp />
      </div>
    </Router>
  )
}

export default App