import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import Examples from "./components/Examples";

function App() {
<<<<<<< HEAD
=======
  const [selectedTab, setSelectedTab] = useState();
  const handleClick = (tab) => {
    setSelectedTab(tab);
    console.log(selectedTab);
  };

>>>>>>> 4c5247526d21be15dee1daf445f2d9ff8c957822
  return (
    <div>
      <Header />
      <main>
<<<<<<< HEAD
        <CoreConcept />
        <Examples />
=======
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
            <TabButton
              isSelected={selectedTab === "components"}
              onClick={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTab === "jsx"}
              onClick={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTab === "props"}
              onClick={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTab === "state"}
              onClick={() => handleClick("state")}
            >
              State
            </TabButton>
          </menu>
          {!selectedTab ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTab].title}</h3>
              <p>{EXAMPLES[selectedTab].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTab].code}</code>
              </pre>
            </div>
          )}
        </section>
>>>>>>> 4c5247526d21be15dee1daf445f2d9ff8c957822
      </main>
    </div>
  );
}

export default App;
