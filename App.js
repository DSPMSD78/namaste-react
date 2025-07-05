import ReactDOM from "react-dom/client";

const elem = <h4>elem</h4>;
const jsxHeading = (
  <div>
    <h1 id="heading">Namaste JS</h1>
    {elem}
  </div>
);

const HeadingComponent = () => {
  return (
    <div>
      {jsxHeading}
      <Title />
      <h1 className="heading">Namaste React Heading Component</h1>
    </div>
  );
};

const Title = () => <h2>Hello</h2>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
