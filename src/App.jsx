import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import MainScreen from "./pages/Main";
import MainScreen1 from "./pages/main1";
import Settings from "./components/Settings";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Login />} />
          <Route path="/form" element={<Settings />} />
          <Route path="/" element={<MainScreen />} />
          <Route path="/m" element={<MainScreen1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
