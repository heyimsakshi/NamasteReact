const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[
    React.createElement("h1",{id:"baby"},"Hi from nepal"),
    React.createElement("h2",{id:"mm"},"h2tage")
]))

console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);