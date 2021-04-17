import Part from "./Part";
import Total from "./Total";

const Content = (props) => {
  var ejercicios = [];

  props.contents.forEach((i) => {
    ejercicios.push(i.exercises);
  });

  const listItems = props.contents.map((content) => (
    <Part key={content.id} part={content} />
  ));

  return (
    <>
      {listItems}
      <Total ejercicios={ejercicios} />
    </>
  );
};

export default Content;
