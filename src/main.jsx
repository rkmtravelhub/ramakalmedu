import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";

// The build pre-renders the page into index.html (so search engines and AI
// crawlers can read it without JavaScript); hydrate that markup when present.
const root = document.getElementById("root");
if (root.hasChildNodes()) hydrateRoot(root, <App />);
else createRoot(root).render(<App />);
