"use client";
import { Component, ReactNode, useState } from "react";
import PropTypes from "prop-types";
import Observer from "@researchgate/react-intersection-observer";
import { ReactElement } from "react-markdown/lib/react-markdown";

// class ViewableMonitor extends Component {
//   static propTypes = {
//     tag: PropTypes.node,
//     children: PropTypes.func.isRequired,
//   };

//   static defaultProps = {
//     tag: "div",
//   };

//   state = {
//     isIntersecting: false,
//   };

//   handleChange = ({ isIntersecting }: { isIntersecting: boolean }) => {
//     this.setState({ isIntersecting });
//   };

//   render() {
//     const { tag: Tag, children, ...rest } = this.props;

//     return (
//       <Observer {...rest} onChange={this.handleChange}>
//         <Tag>{children(this.state.isIntersecting)}</Tag>
//       </Observer>
//     );
//   }
// }

type Props = {
  children: (isIntersecting: boolean) => ReactElement;
};

const ViewableMonitor = (props: Props) => {
  const { children } = props;
  const [isIntersecting, setIsIntersecting] = useState(false);

  const handleChange = ({ isIntersecting }: { isIntersecting: boolean }) => {
    setIsIntersecting(isIntersecting);
  };

  return (
    <Observer {...props} onChange={handleChange}>
      {children(isIntersecting)}
    </Observer>
  );
};

export default ViewableMonitor;
