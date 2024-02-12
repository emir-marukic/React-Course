import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import NoProjectSelected from "./Components/NoProjectSelected";
import NewProject from "./Components/NewProject";
import SelectedProject from "./Components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectsId: undefined,
    projects: [],
  });

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectsId: id,
      };
    });
  }

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectsId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectsId: undefined,
      };
    });
  }

  function handleAddProject(projectsData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectsData,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedProjectsId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id == projectState.selectedProjectsId
  );

  let content = <SelectedProject project={selectedProject} />;

  if (projectState.selectedProjectsId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectState.selectedProjectsId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelect={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
