import React, { createContext, useCallback, useContext, useState } from "react";

import ProjectModal from "./projectModal";

const ProjectModalContext = createContext(null);

export function ProjectModalProvider({ children }) {
  const [project, setProject] = useState(null);
  const openProject = useCallback((markdownRemark) => {
    setProject(markdownRemark);
  }, []);
  const closeProject = useCallback(() => {
    setProject(null);
  }, []);

  return (
    <ProjectModalContext.Provider value={{ openProject }}>
      {children}
      {project ? <ProjectModal project={project} onClose={closeProject} /> : null}
    </ProjectModalContext.Provider>
  );
}

export function useProjectModal() {
  const context = useContext(ProjectModalContext);
  if (!context) {
    throw new Error("useProjectModal must be used within ProjectModalProvider");
  }
  return context;
}