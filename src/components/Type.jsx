import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Text } from "@chakra-ui/react";
const Type = ({ strings }) => {
  const typedTextRef = useRef(null);
  useEffect(() => {
    const options = {
      strings,
      typeSpeed: 50,
      backSpeed: 25,
      startDelay: 500,
      backDelay: 1000,
      loop: true,
    };
    const typed = new Typed(typedTextRef.current, options);
    return () => {
      typed.destroy();
    };
  }, [strings]);
  return (
    <>
      <Text ref={typedTextRef} fontSize="30px" fontWeight="bold" zIndex={100}  />
    </>
  );
};
export default Type;