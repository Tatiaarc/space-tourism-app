import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Destination } from "./components/Destination";
import { Crew } from "./components/Crew";
import { Technology } from "./components/Techonology";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="space-tourism-app/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="destination" element={<Destination />} />
            <Route path="crew" element={<Crew />} />
            <Route path="technology" element={<Technology />} />
          </Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
