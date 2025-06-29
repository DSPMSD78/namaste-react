const parent = React.createElement("div",{id : "parent"}, React.createElement("div",{id : "child"}, [[React.createElement("h1",{key : "first"}, "I'm h1 tag"),React.createElement("h1",{key : "second"}, "I'm h1 tag")]]));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
console.log(parent)