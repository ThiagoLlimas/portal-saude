import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <GoogleReCaptchaProvider reCaptchaKey="6LcU3tgsAAAAAHvVzQPEPuyeJcBj1hqYoJMcWs0j">
        <App />
      </GoogleReCaptchaProvider>
    </HelmetProvider>
  </StrictMode>,
);
