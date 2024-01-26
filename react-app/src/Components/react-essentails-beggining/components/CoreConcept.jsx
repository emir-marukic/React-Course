import { CORE_CONCEPTS } from "./data";
import CoreConcepts from "./CoreConcepts";

function CoreConcept() {
  return (
    <>
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
    </>
  );
}

export default CoreConcept;
