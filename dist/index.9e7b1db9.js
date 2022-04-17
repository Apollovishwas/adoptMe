const Pet = (props)=>{
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed), 
    ]);
};
const App = ()=>{
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            name: "tommy",
            animal: "dog",
            breed: "dog"
        }),
        React.createElement(Pet, {
            name: "pussy",
            animal: "cat",
            breed: "naatu"
        }),
        React.createElement(Pet, {
            name: "naggy",
            animal: "cat",
            breed: "veettu"
        }), 
    ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));

//# sourceMappingURL=index.9e7b1db9.js.map
