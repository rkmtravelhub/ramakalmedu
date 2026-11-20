import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import JeepSafari from "./JeepSafari";

// Pages to pre-render: output HTML file (relative to dist) -> component.
export const pages = {
  "index.html": () => renderToString(<App />),
  "jeep-safari/index.html": () => renderToString(<JeepSafari />),
};
