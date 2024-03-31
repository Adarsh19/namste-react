//Provide attributes to a object
//Const heading = React.createElement("h1", {id: "Here ids comes"}, "Hello world from react");

const heading = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
    "div",
    {id: "child"},
    React.createElement("div",{}, "This is children") 
    )
);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);