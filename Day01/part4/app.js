    //creating heading element  <h1> hello world from react </h1>
    //using React.createElement("what element want to create", {what attribute want to add}, "what conent inside the element")
    const heading  = React.createElement("h1",{id: "heading"},"Hello world from react")//object
    //the above one create heading element as object not tag
    //to render in root , we need to create virtual root 
    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(heading)
    //this render method taking object and convert it into html tag and place inside root

    // ----------------------------------------------------------------------------------------------------------
    //how to create nested element using react
    //like  this
    /*
        <div id="parent">
                <div id="child">
                    <h1> Hello there</h1>
                
                </div>
        </div>

    */

    const element = React.createElement(
        "div",
    {id:"parent"},
    React.createElement("div",
    {id:"child"},
    React.createElement("h1",{},"Hello there!"))
    )

// how to add siblings 
     /*
        <div id="parent">
                <div id="child">
                    <h1> Hello there</h1>
                    <h2> Hello 2</h2>
                </div>
        </div>

    */

//for that we can use array in third param
const element2 = React.createElement(
    "div",
{id:"parent"},
React.createElement("div",
{id:"child"},
[React.createElement("h1",{},"Hello there!"),React.createElement("h2",{},"Hello there!")])
)