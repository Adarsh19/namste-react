import React, { Component } from "react";
import ReactDOM from "react-dom";

// React Elements

const heading = React.createElement("div",{id: "parent"},"Nameste React");

const JsxHeading = () => (
        <h1 className="head"> 
        test multi line heading
        </h1>    
  );

// Functional Component

const num = 10000;

const FunctionalComponent = () => {
    return <h1> <JsxHeading/>Nameste React {num} functional component </h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalComponent />);