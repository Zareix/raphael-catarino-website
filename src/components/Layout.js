import React from 'react'
import Navigation from './Navbar'

const navStyles = {
    overflow: "hidden",
    position: "fixed",
    top: "0",
    width: "100%",
}

const Layout = (props) => {
    return (
        <div>
            <Navigation style={navStyles}/>
            {props.children}
        </div>
    )
}

export default Layout
