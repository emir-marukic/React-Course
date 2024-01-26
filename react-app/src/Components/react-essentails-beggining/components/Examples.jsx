import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "./data";
import Section from "./Section";
import Tabs from "./Tabs";

function Examples() {
  const [selectedTab, setSelectedTab] = useState("components");
  const handleClick = (tab) => {
    setSelectedTab(tab);
    console.log(selectedTab);
  };

  return (
    <div>
      <Section title="Examples" id="examples">
        <Tabs
          buttons={
            <>
              <TabButton onClick={() => handleClick("components")}>
                Components
              </TabButton>
              <TabButton onClick={() => handleClick("jsx")}>JSX</TabButton>
              <TabButton onClick={() => handleClick("props")}>Props</TabButton>
              <TabButton onClick={() => handleClick("state")}>State</TabButton>
            </>
          }
        >
          {
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTab].title}</h3>
              <p>{EXAMPLES[selectedTab].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTab].code}</code>
              </pre>
            </div>
          }
        </Tabs>
      </Section>
    </div>
  );
}

export default Examples;
