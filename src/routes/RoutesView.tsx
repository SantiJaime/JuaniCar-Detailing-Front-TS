import { Route, Routes } from "react-router-dom"
import ErrorPage from "../pages/ErrorPage"
import HomePage from "../pages/HomePage"

const RoutesView = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="*" element={<ErrorPage />}/>
    </Routes>
  )
}

export default RoutesView