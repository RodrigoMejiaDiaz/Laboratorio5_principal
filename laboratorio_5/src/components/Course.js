import Content from "./Content";
import Header from "./Header";
import "./Course.css";

const Course = (props) => {
  const listItems = props.courses.map((course) => (
    <div key={course.id}>
      <Header header={course.name} />
      <div className={"container"}>
        <Content contents={course.parts} />
      </div>
    </div>
  ));
  return listItems;
};

export default Course;
