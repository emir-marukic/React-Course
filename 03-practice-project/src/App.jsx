import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import NoProjectSelected from "./Components/NoProjectSelected";
import NewProject from "./Components/NewProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectsId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectsId: null,
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
        projects: [...prevState.projects, newProject],
      };
    });
  }

  console.log(projectState);
  let content;

  if (projectState.selectedProjectsId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectState.selectedProjectsId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
