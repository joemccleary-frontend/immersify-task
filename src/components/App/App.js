// eslint-disable-next-line
import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Landing } from '../Landing/Landing'

function App() {
    console.log('React Version: ' + React.version);

    return (
        <div>
            <Routes>
                <Route
                    path="/*"
                    element={
                        <Landing />
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
