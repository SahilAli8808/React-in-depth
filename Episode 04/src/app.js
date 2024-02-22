// importing react from node_module as React
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Body from './components/Body'
import Header from './components/Header'


const App = () => {
    return (
        <div>

            <Header />
            <Body />
            {/* <Footer/> */}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)

