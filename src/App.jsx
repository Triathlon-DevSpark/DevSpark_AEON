import BioLoginPage from "./pages/BioLoginPage"
import Startpage from "./pages/StartPage"
import TestingPage from "./pages/TestingPage"
import BottomNavbar from "./components/BottomNavbar"
import HomePage from "./pages/HomePage"
import { Box } from "@mui/material"
import { useState } from "react"
import PlanetInfo from "./pages/PlanetInfo"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [planetInfo, setPlanetInfo] = useState("")

  function setInfoToPlanet(info) {
    setPlanetInfo(info)
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* <TestingPage /> */}
        {/* <TestGlobes /> */}

        {/* <Startpage /> */}
        {/* <BioLoginPage /> */}
        <Route path="/" element={<Startpage />} />
        <Route path="/login" element={<BioLoginPage />} />
        <Route path="/home" element={<HomePage setInfoToPlanet={setInfoToPlanet} />} />
        <Route path="/planetinfo" element={<PlanetInfo planetInfo={planetInfo} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
