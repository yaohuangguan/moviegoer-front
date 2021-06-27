import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import s from "./app.module.scss";
import { renderRoutes } from "./tools/route-tool";
import routes from "./routes";


// start up
function App(props: any) {
  console.log(`props`, props)
  return <Router>{renderRoutes(routes, props)}</Router>;
}

export default App;
