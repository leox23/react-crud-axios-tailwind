import React from "react";
import "./index.css";
import DashboardPage from './components/DashboardPage';
import { deleteReport } from './services/api';

function App() {
  return <>
    <DashboardPage></DashboardPage>
  </>
}

// Probando la peticion desde aca, ese reporte aun existe
//deleteReport("63ae69148706c9541977030c")

export default App;
