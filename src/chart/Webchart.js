import React from "react"
import './Chart.css'
// https://apexcharts.com/docs/react-charts/
// npm install --save react-apexcharts apexcharts
import { BrowserRouter as Router, NavLink, Route, Routes } from "react-router-dom";
import Barchart from "./graph/Barchart";
import Piechart from "./graph/Piechart";
import Areachart from "./graph/Areachart";
import Linechart from "./graph/Linechart";
import Donutchart from "./graph/Donutchart";
import Stackebar from "./graph/Stackebar";
import Radialbar from "./graph/Radialbar";
import Polararea from "./graph/Polararea";


const Webchart = () => {
    return (
        <>

            <Router>

                <ul className="nav justify-content-end text-primary ">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/bar">Bar Chart</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/pie">Pie Chart</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/area">Area Chart</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/line">Line Chart</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/donut">Donut Chart</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/stackebar">Stackebar Chart</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/radialbar">Radialbar Chart</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/polararea">Polararea Chart</NavLink>
                    </li>

                </ul>
                <div className="container  mt-5  d-flex justify-content-center">

                    <Routes>

                        <Route exact path='/bar' element={<Barchart />} />
                        <Route path='/pie' element={<Piechart />} />
                        <Route exact path='/area' element={<Areachart />} />
                        <Route exact path='/line' element={<Linechart />} />
                        <Route exact path='/donut' element={<Donutchart />} />
                        <Route exact path='/stackebar' element={<Stackebar />} />
                        <Route exact path='/radialbar' element={<Radialbar />} />
                        <Route exact path='/polararea' element={<Polararea />} />


                    </Routes>

                </div>
            </Router>

        </>
    )
}

export default Webchart