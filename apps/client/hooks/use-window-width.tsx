"use client";
import { useEffect, useState } from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState(99999999);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    isMobile: width < 768,
    width,
  };
};

export default useWindowWidth;
