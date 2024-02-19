    //creating heading element  <h1> hello world from react </h1>
    //using React.createElement("what element want to create", {what attribute want to add}, "what conent inside the element")
    const heading  = React.createElement("h1",{id: "heading"},"Hello world from react")//object
    //the above one create heading element as object not tag
    //to render in root , we need to create virtual root 
    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(heading)
    //this render method taking object and convert it into html tag and place inside root
    