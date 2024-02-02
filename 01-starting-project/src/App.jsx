import { useState } from "react";
import Header from "./Components/Header";
import { Results } from "./Components/Results";
import UserInput from "./Components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1000,
    expectedReturn: 6,
    duration: 10,
  });
  function handleChange(inputIndetifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIndetifier]: +newValue,
      };
    });
  }

  const inputIsValid = userInput.duration <= 0;

  return (
    <div>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />
      {inputIsValid ? (
        <p className="center" style={{ color: "red" }}>
          Duration cant be zero
        </p>
      ) : (
        <Results input={userInput} />
      )}
    </div>
  );
}

export default App;
