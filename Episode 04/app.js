// importing react from node_module as React
import React from 'react'
import ReactDOM  from 'react-dom/client'

const Header =()=>{
    return (
        <div className='header'>
            this is Header
        </div>
    )
}

const Body = ()=>{
    return (
        <div className='body'>
            This is Body
        </div>
    )
}

const Footer = ()=>{
    return (
        <div className='footer'>
            this is footer
        </div>
    )
}

const App=  ()=>{
    return   (
        <div>

        <Header/>
        <Body/>
        <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)

