
import React, { useState, useEffect } from "react";
import { Flex, Image, Box, Text } from "@chakra-ui/react";
import Type from "../components/Type";

const imageUrls = [
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
];

const textToShow = "Hi ,I am Raveena Banduni"; 
const typingStrings = [
  "Front-end web developer",
  "Problem Solver",
];
export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      height="100vh"
      overflow="hidden"
      position="relative"
      textAlign="center"
      color="white"
      fontSize="24px"
      fontWeight="bold"
      backgroundColor="rgba(0, 0, 0, 0.5)"
      padding="8px 16px"
      borderRadius="4px"
      w={{base:"100%" ,md:"100%",lg:"100%"}}

    >
      {imageUrls.map((url, index) => (
        <Box
          key={index}
          position="absolute"
          left={
            index === currentIndex
              ? "0"
              : index < currentIndex
              ? "100%"
              : "-100%"
          }
          transition="left 1s ease-in-out"
          width="100%"
          height="100%"
        >
          <Image
            objectFit="cover"
            src={url}
            alt={`Image ${index + 1}`}
            width="100%"
            height="100%"
          />
        </Box>
      ))}

      <Text
        position="absolute"
       
        transform="translateX(-50%)"
        transform="translatey(-50%)"

        fontSize="7vh"
        color="rgba(147, 112, 219, 1)"
      >
        {textToShow}
      </Text>
      <Box
        w="500px"
        h="100px"
        fontFamily="Poppins"
        pos="relative"
        mt="15vh"
      >
        <Type strings={typingStrings}         
        
 />
      </Box>
    </Flex>
  );
}
