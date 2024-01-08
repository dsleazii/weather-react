import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WeatherApi from "WeatherApi.js";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
