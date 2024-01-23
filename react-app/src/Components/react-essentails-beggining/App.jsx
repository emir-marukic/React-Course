import { useState } from "react";
import CoreConcepts from "./components/CoreConcepts";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";

function App() {
  const [selectedTab, setSelectedTab] = useState("components");
  const handleClick = (tab) => {
    setSelectedTab(tab);
    console.log(selectedTab);
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concept</h2>
          <ul>
            {CORE_CONCEPTS.map((item, index) => {
              return (
                <CoreConcepts
                  key={index}
                  title={item.title}
                  text={item.description}
                  img={item.image}
                />
              );
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => handleClick("components")}>
              Components
            </TabButton>
            <TabButton onClick={() => handleClick("jsx")}>JSX</TabButton>
            <TabButton onClick={() => handleClick("props")}>Props</TabButton>
            <TabButton onClick={() => handleClick("state")}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTab].title}</h3>
            <p>{EXAMPLES[selectedTab].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTab].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
