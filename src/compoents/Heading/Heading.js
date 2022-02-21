// function component aka dumb compnent aka stateless
// purpose is to render props
// Single responsibilty principle

const Heading = (props) => {
  return <h3>Welcome, {props.greeting} to react application... heading </h3>;
};

export default Heading;
