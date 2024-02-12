import Button from "./Button";

const Sidebar = ({
  onStartAddProject,
  projects,
  onSelect,
  selectedProjectId,
}) => {
  return (
    <div className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Project
      </h2>
      <div>
        <Button onClick={onStartAddProject}> + Add Project</Button>
      </div>
      <ul className="mt-5">
        {projects.map((item) => {
          let cssClasses =
            "w-full text-left py-1 rounded-sm my-1  hover:bg-stone-800";

          if (item.id === selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }
          return (
            <li key={item.id}>
              <button className={cssClasses} onClick={() => onSelect(item.id)}>
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
