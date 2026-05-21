import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey="6LcU3tgsAAAAAHvVzQPEPuyeJcBj1hqYoJMcWs0j">
      <App />
    </GoogleReCaptchaProvider>
  </StrictMode>,
);

