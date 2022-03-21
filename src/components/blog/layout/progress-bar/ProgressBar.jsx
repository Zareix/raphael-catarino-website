import React, { useEffect, useState } from "react";

import styled from "styled-components";
import useScroll from "../../../hooks/use-scroll";

const Bar = styled.div`
  position: fixed;
  top: 0;
  z-index: 999;
  height: 6px;
  width: ${(props) => props.width}%;
  border-radius: 0px 2px 0px 0px;
`;

const ProgressBar = () => {
  const { scrollAmount } = useScroll();

  const [width, setWidth] = useState(0);

  useEffect(() => {
    const doc = document.documentElement;
    const scrollTop = doc.scrollTop || document.body.scrollTop;
    const scrollHeight = doc.scrollHeight || document.body.scrollHeight;
    setWidth((scrollTop / (scrollHeight - doc.clientHeight)) * 100);
  }, [scrollAmount]);

  return (
    <Bar
      className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-500"
      width={width}
    ></Bar>
  );
};

export default ProgressBar;
