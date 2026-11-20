import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import JeepSafari from "./JeepSafari";
import "./styles.css";

const root = document.getElementById("root");
if (root.hasChildNodes()) hydrateRoot(root, <JeepSafari />);
else createRoot(root).render(<JeepSafari />);
