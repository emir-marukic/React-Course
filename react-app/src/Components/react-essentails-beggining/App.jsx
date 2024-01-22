import img from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data";

const reactDescription = ["Core", "Fundamental", "Crucial"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export function Header() {
  const description = reactDescription[getRandomInt(2)];
  return (
    <>
      <header>
        <img src={img} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    </>
  );
}

export function CoreConcepts(props) {
  return (
    <div>
      <li>
        <img src={props.img} alt="#" />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </li>
    </div>
  );
}

function App() {
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
      </main>
    </div>
  );
}

export default App;
