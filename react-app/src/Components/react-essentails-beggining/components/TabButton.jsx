const TabButton = ({ children, onClick }) => {
  return (
    <div>
      <li>
        <button onClick={onClick}>{children}</button>
      </li>
    </div>
  );
};

export default TabButton;
