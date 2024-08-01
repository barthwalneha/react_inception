/* 
Example 1 : h1 using react 

const heading = React.createElement(
  "h1",
  {
    id: "main_heading",
    xyz: "neha",
  },
  "Hello,Lets start our React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

Example 2 : nested html using react 

<div id="parent">
  <div id="child">
    <h1> Its Neha </h1>
    <h2> Barthwal </h2>
  </div>
</div>


const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Its Neha"),
    React.createElement("h2", {}, "Barthwal"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/
/* Example 2 : nested html using react 

<div id="parent">
  <div id="child1">
    <h1> Its Neha </h1>
    <h2> Barthwal </h2>
  </div>

  <div id="child2">
    <h1> Its Neha </h1>
    <h2> Barthwal </h2>
  </div>
</div>

*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Its Neha"),
    React.createElement("h2", {}, "Barthwal"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Its Neha"),
    React.createElement("h2", {}, "Barthwal"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
