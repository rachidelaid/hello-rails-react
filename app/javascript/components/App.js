import React from "react"
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import store from "../store"

import Home from "./Home"
import Greeting from "./Greeting"

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/"
            element={(
              <Home />
            )} />
          <Route path="/greeting" element={(<Greeting />)} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App
