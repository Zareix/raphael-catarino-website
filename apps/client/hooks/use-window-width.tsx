"use client";

import { useEffect, useMemo, useState } from "react";

const MOBILE_BREAKPOINT = 768;

const useWindowWidth = () => {
  const [isSSR, setIsSSR] = useState(true);
  const [width, setWidth] = useState(!isSSR ? window.innerWidth : 1200);
  const isMobile = useMemo(() => width < MOBILE_BREAKPOINT, [width]);

  useEffect(() => {
    setIsSSR(false);
    const callback = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", callback);
    callback();
    return () => {
      window.removeEventListener("resize", callback);
    };
  }, []);

  return { width, isMobile };
};

export default useWindowWidth;
