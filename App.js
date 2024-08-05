import React from "react";
import ReactDOM from "react-dom";

const Component1 = () => (
  <div>
    <h1>This is Component1</h1>
  </div>
);
const Component2 = () => {
  return (
    <div>
      <Component1 />
      <h1>This is Component2</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Component2 />);
