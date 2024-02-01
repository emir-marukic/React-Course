import img from "./assets/investment-calculator-logo.png";
function App() {
  return (
    <div id="header">
      <img src={img} alt="" />
      <h1>React Investment Calculator</h1>
      <div className="input-group">
        <label>INITIAL INVESTMENT</label>
        <input type="number" id="user-input" />

        <label>ANNUAL INVESTMENT</label>
        <input type="number" id="user-input" />

        <label>EXPECTED RETURN</label>
        <input type="number" id="user-input" />

        <label>DURATION</label>
        <input type="number" id="user-input" />
      </div>
    </div>
  );
}

export default App;
