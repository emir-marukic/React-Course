const Tabs = ({ children, buttons, ButtonsContainer = "menu" }) => {
  return (
    <div>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </div>
  );
};

export default Tabs;
