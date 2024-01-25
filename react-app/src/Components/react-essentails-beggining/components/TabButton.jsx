<<<<<<< HEAD
const TabButton = ({ children, ...props }) => {
  return (
    <div>
      <li>
        <button {...props}>{children}</button>
=======
const TabButton = ({ children, onClick, isSelected }) => {
  return (
    <div>
      <li>
        <button className={isSelected && "active"} onClick={onClick}>
          {children}
        </button>
>>>>>>> 4c5247526d21be15dee1daf445f2d9ff8c957822
      </li>
    </div>
  );
};

export default TabButton;
