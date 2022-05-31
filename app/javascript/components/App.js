import React from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./Home"
import Greeting from "./Greeting"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
          element={(
            <Home />
          )} />
        <Route path="/greeting" element={(<Greeting greeting="Hi!" />)} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
