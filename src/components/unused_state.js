import * as React from "react";
import {
  motion,
  useMotionValue,
  useViewportScroll,
  useTransform
} from "framer-motion";

export default function State(props) {
  const [Tapped, setTapped] = React.useState(false);

  const handleClick = () => {
    console.log(Tapped);
    Tapped ? setTapped(false) : setTapped(true);
  };

  return (
    <motion.div
      className="StateTest"
      onClick={handleClick}
      variants="statevariants"
    ></motion.div>
  );
}
