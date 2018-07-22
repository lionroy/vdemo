import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import './global-styles.js'

import { injectGlobal } from "styled-components";

injectGlobal`
    body {
        margin: 0;
        padding: 0;
        font-famaily: 'Roboto Mono', 'Roboto Condensed', 'Roboto Slab', 'Roboto';
  }
`;

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
