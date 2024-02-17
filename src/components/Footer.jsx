import React from "react";
import { Flex, Heading, Image, Box, Text, Container } from "@chakra-ui/react";

export default function Footer() {
  return (
    <div
      style={{
        border: "2px solid white",
        height: "12vh",
        // width:"100%",
        backgroundColor: "lightGray",
      }}
    >
      <Text
        textAlign="center"
        mt="3vh"
        fontSize="18px"
        fontWeight="bold"
        color="purple"
      >
        Your vision, our creation. © RAVEENA BANDUNI 2024{" "}
      </Text>
    </div>
  );
}
