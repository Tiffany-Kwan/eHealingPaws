import React, { Fragment, Suspense, lazy } from "react";
import "./App.css";
import Appbar_home from "./components/Appbar_home";
import RegisterDialog from "./components/RegisterDialog";

function App() {
  return (
    <div>
      <Appbar_home />
    </div>
  );
}

export default App;
