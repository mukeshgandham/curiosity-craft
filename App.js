const heading = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement(
      "div",
      { id: "parent1" },
      [React.createElement("h1", { id: "child" }, "This is heading1"),
       React.createElement("h2", { id: "child2" }, "This is heading2")
      ]
    ),
    React.createElement(
      "div",
      { id: "parent2" },
      [React.createElement("h1", { id: "child" }, "This is heading1"),
       React.createElement("h2", { id: "child2" }, "This is heading2")
      ]
    )]
  );
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(heading);