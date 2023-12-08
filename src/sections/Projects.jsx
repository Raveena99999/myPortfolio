

import { Flex, Heading, Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import pic2 from "../assets/superHeroResume.png";
import pic3 from "../assets/indieGogo.png";
import './Project.css'

const cardStyles = {
  borderRadius:"20px",
  width: { base: "90%", md: "45%", lg: "70vh" },
  mb: "8",
  position: "relative",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
  },
};

export default function Projects() {
  return (
    <div style={{  width: "100%", padding: "20px" }}>
      <Heading textAlign="center" mt="5vh"mb="8vh" color="rgba(147, 112, 219, 1)" >Projects</Heading>

      <Flex w="80%" mx="auto" justify="space-around" mt="4" flexWrap="wrap" >
        <Box p="4"
         {...cardStyles}
         className="color-change-2x "
         >
          <Image src={pic2} alt="my image" w="100%" h="280px" />
          <Text textAlign="center" fontWeight="bold" fontSize="xl" mt="3" >
            Superhero Resume
          </Text>
          <Text textAlign="center" mt="4" >

          Augmented Radhakrishna's superhero resume with dynamic animation effects acquired through 6-7 hours of dedicated learning, amplifying its visual appeal and impact.          </Text>
          <Text textAlign="center" mt="3" >
            Tech Stack: HTML | CSS | Git
          </Text>
          <Flex justify="space-around" mt="6" flexWrap="wrap">
            <a
              href="https://649c13a67142170a3daa5e24--cute-crumble-bdd1df.netlify.app/"
              target="_blank"
              style={{
                // border: "1px solid black",
                width: "25%",
                textAlign: "center",
                fontSize: "xl",
                fontWeight: "bold",
                backgroundColor:"purple",
                color:"white",
                borderRadius:"2vh"

              }}
            >
              Go Live
            </a>
            <a
              href="https://github.com/Raveena99999/superheroResume"
              target="_blank"
              style={{
                // border: "1px solid black",
                width: "25%",
                textAlign: "center",
                fontSize: "xl",
                fontWeight: "bold",
                mt: "2",
                backgroundColor:"purple",
                color:"white" ,
                borderRadius:"2vh" 
                          }}
            >
              Github
            </a>
          </Flex>
        </Box>

        <Box p="4"
         {...cardStyles}
         className="color-change-2x "
         >
          <Image src={pic3} alt="my image" w="100%" h="280px" />
          <Text textAlign="center" fontWeight="bold" fontSize="xl" mt="3" >
            A Website Named Indiegogo
          </Text>
          <Text textAlign="center" mt="4" >
            A crowdfunding platform that enables people to raise money for virtually any cause or purpose.
          </Text>
          <Text textAlign="center" mt="3" >
            Tech Stack: HTML | CSS | Javascript | React JS | Chakra UI | Git
          </Text>
          <Flex justify="space-around" mt="4" flexWrap="wrap">
            <a
              href="https://site-indigo.netlify.app/"
              target="_blank"
              style={{
                // border: "1px solid black",
                width: "25%",
                textAlign: "center",
                fontSize: "xl",
                fontWeight: "bold",
                backgroundColor:"purple",
                color:"white",
                borderRadius:"2vh" 

              }}
            >
              Go Live
            </a>
            <a
              href="https://github.com/Raveena99999/IndiegogoProject/tree/main/Project-Indiegogo"
              target="_blank"
              style={{
                // border: "1px solid black",
                width: "25%",
                textAlign: "center",
                fontSize: "xl",
                fontWeight: "bold",
                mt: "2",
                backgroundColor:"purple",
                color:"white",
                borderRadius:"2vh" 

              }}
            >
              Github
            </a>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
}
