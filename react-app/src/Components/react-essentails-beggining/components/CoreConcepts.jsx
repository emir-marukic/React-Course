function CoreConcepts(props) {
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
export default CoreConcepts;
