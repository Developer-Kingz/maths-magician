/* eslint-disable */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Calculator from "./components/Calculator";
import Quotes from "./components/Quotes";
import Home from "./components/Home";

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/calculator" element={<Calculator />} />
                    <Route path="/quotes" element={<Quotes />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

/* eslint-enable */
