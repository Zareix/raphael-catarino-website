import React, { useState, useEffect } from "react";

import { FaArrowCircleUp } from "react-icons/fa";
import { Transition } from "react-spring/renderprops";
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
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        // Test si l'on affiche ou non le bouton
        const checkScrollTop = () => {
            if (!showScroll && window.pageYOffset > 400) {
                setShowScroll(true);
            } else if (showScroll && window.pageYOffset <= 400) {
                setShowScroll(false);
            }
        };

        window.addEventListener("scroll", checkScrollTop); // Lance checkScrollTop quand le scroll change
        return () => { }
    }, [showScroll])

    return (
        <div id="scrollBtn" style={scrollBtnStyles}>
            <Transition
                items={showScroll}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}
            >
                {(showScroll) =>
                    showScroll &&
                    ((props) => (
                        <FaArrowCircleUp
                            onClick={() => {
                                animateScroll.scrollToTop();
                            }}
                            size={30}
                            style={props} className="hover:opacity-80"
                        />
                    ))
                }
            </Transition>
        </div>
    );
};

export default ScrollButton;
