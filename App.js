const heading = React.createElement("div",{},
React.createElement("div",{},
[React.createElement("h1",{},"H1 from React"),React.createElement("h1",{},"H2 from React")]))

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)