import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Numbers } from "./App";
// import * as serviceWorker from "./serviceWorker";

const arr = [1, 2, 3];
ReactDOM.render(<Numbers no={arr} />, document.getElementById("root"));
