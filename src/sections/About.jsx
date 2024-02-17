import React from "react";
import {
  Flex,
  Heading,
  Image,
  Box,
  Text,
  Container,
  Link,
  Button,
} from "@chakra-ui/react";
import "./About.css";
import pic from "../assets/myProfile.jpg";

export default function About() {
  return (
    <Box
      height={{ base: "auto", md: "auto", lg: "auto", xl: "auto" }}
      width="100%"
      p="4"
    >
      <Heading textAlign="center" mt="5vh">
        About Me
      </Heading>
      <Flex
        mt={{ base: "4", md: "10vh" }}
        direction={{ base: "column", md: "row" }}
        w="90%"
        maxW="1200px"
        mx="auto"
        justify="space-evenly"
        alignItems="center"
      >
        <Box
          borderRadius="50%"
          overflow="hidden"
          color="black"
          mb={{ base: "4", md: "0" }}
          mt={{ lg: "-30px" }}
          boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 50px"
        >
          <Image src={pic} alt="my image" w="280px" h="310px" />
        </Box>
        <Box>
          <Container w={{ base: "100%", md: "60vh", lg: "80vh" }}>
            <Text fontSize="lg">
              Hi there! I am{" "}
              <Text
                as="span"
                color="purple"
                fontSize="24px"
                fontWeight="bold"
                className="tracking-in-expand"
              >
                Raveena Banduni
              </Text>{" "}
              <br />
              <Box mt={{ base: "3", md: "3.5vh" }}>
                {/* As an enthusiastic and adaptable Front End Developer intern,
                I've gained expertise in HTML, CSS, JavaScript, and React.
                Committed to delivering visually appealing and user-friendly
                interfaces. Continuously learning and adapting to the latest web
                technologies to enhance user experiences. */}
                As a passionate Full Stack Developer specializing in the MERN
                stack, diving into the dynamic realm of web development is
                second nature. Proficient in MongoDB, Express.js, React.js, and
                Node.js, crafting innovative solutions that push boundaries is a
                thrilling endeavor. With a keen eye for detail and a relentless
                dedication to continuous learning, collaborating on projects
                that inspire creativity and drive impactful outcomes is the
                ultimate aspiration. Let's embark on an exhilarating journey
                together, shaping the future of digital experiences in the world
                of Full Stack MERN development!
              </Box>
            </Text>
          </Container>

          <Flex
            flexWrap="wrap"
            ml="2vh"
            mt="5vh"
            justify={{ base: "center", md: "flex-start" }}
            align="center"
          >
            <Button
              _hover={{ background: "black", color: "white" }}
              color="black"
              border="2px"
              mb={{ base: "2vh", md: "0", lg: "0" }}
              mr={{ base: "0", md: "2vh", lg: "2vh" }}
            >
              <Link
                href="https://github.com/Raveena99999"
                target="blank"
                borderRadius="1vh"
                fontSize="18px"
                _hover={{ textDecoration: "none" }}
              >
                Github
              </Link>
            </Button>
            <Button
              _hover={{ backgroundColor: "Blue", color: "white" }}
              color="black"
              border="2px"
              mb={{ base: "2vh", md: "0", lg: "0" }}
              mr={{ base: "0", md: "2vh", lg: "2vh" }}
            >
              <Link
                href="https://www.linkedin.com/in/raveena-banduni-6290a7248/"
                target="blank"
                borderRadius="1vh"
                fontSize="18px"
                color="blue"
                _hover={{ textDecoration: "none", color: "black" }}
              >
                Linkedin
              </Link>
            </Button>
            <Button
              _hover={{ backgroundColor: "purple", color: "white" }}
              color="black"
              border="2px"
            >
              <Link
                href="https://drive.google.com/file/d/1Bbg5zIBOvFr4AD6aalCvKV9qK31GUQ69/view?usp=sharing"
                download="Raveena-Banduni-pdf"
                target="blank"
                borderRadius="1vh"
                fontSize="18px"
                _hover={{ textDecoration: "none", color: "black" }}
                color="purple"
              >
                My Resume
              </Link>
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
