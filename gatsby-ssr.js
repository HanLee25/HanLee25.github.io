import React from "react";

import { ProjectModalProvider } from "./src/components/projectModalContext";

export const wrapRootElement = ({ element }) => (
  <ProjectModalProvider>{element}</ProjectModalProvider>
);