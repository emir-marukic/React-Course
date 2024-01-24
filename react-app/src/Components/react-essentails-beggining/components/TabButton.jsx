const TabButton = ({ children, onClick, isSelected }) => {
  return (
    <div>
      <li>
        <button className={isSelected && "active"} onClick={onClick}>
          {children}
        </button>
      </li>
    </div>
  );
};

export default TabButton;
