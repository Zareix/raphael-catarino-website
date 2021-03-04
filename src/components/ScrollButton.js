import React from "react"

import { FaArrowCircleUp } from "react-icons/fa";
import { animateScroll } from "react-scroll"

const scrollBtnStyles = {
    textDecoration: "none",
    position: "fixed",
    bottom: "40px",
    right: "1.5rem",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    opacity: "0.5",
    zIndex: 10
}

const ScrollButton = () => {

    return (
        <div id="scrollBtn" style={scrollBtnStyles}>
            <FaArrowCircleUp
                onClick={() => {
                    animateScroll.scrollToTop();
                }}
                size={30} 
                className="hover:opacity-80"
            />
        </div>
    );
};

export default ScrollButton;
