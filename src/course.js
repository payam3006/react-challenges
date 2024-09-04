const Course = (props) => {
  return (
    <div
      style={{ backgroundColor: props.course.isCompleted ? "green" : "white" }}
    >
      <h1>{props.course.name}</h1>
      <button
        onClick={() => {
          props.deleteCourse(props.course);
        }}
      >
        X
      </button>
      <button
        onClick={() => {
          props.completeCourse(props.course);
        }}
      >
        completed
      </button>
    </div>
  );
};

export default Course;
