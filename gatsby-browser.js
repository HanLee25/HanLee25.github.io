import React from "react";
import "./src/css/style.css";

import { ProjectModalProvider } from "./src/components/projectModalContext";

export const wrapRootElement = ({ element }) => (
  <ProjectModalProvider>{element}</ProjectModalProvider>
);

export const onClientEntry = () => {
  if (process.env.NODE_ENV !== "production" && "serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => registration.unregister());
    });
  }
};