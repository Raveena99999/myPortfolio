import React, { useRef } from "react";
import "./Navbar.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Flex,
  Heading,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  DrawerFooter,
  Box,
  useBreakpointValue,
  useDisclosure,
  Image,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Home from "../sections/Home";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import Contact from "../sections/Contact";
import Resume from "../sections/Resume"
export default function Navbar() {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
    onClose();
  };
  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/10Rpai91e0cGOkyxpWP-KnMb10BOTfrcT/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <>
      <Flex

        position="fixed"
        top={0}
        bg="purple"
        w="100%"
        justify={{
          base: "space-between",
          md: "space-around",
          lg: "space-around",
        }}
        h="12vh"
        align="center"
        pr="5vw"
        pl="5vw"
        zIndex="1000"
        
      >
        <Box>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSELjyBwiLv2xMxNWR1Goi0Q_VvCLs042EqPQ&usqp=CAU"
            w={{ base: "12vw", md: "5vw", lg: "4vw" ,xl:"4vw" }}
            h={{ base: "7vh", md: "8vh", lg: "8vh",xl: "8vh" }}
          />
        </Box>

        {isMobile ? (
          <>
            <Button
          
              ref={btnRef}
              color="black"
              bg="purple"
              onClick={onOpen}
              _hover={{ backgroundColor: "lightPink" }}
              mr="5vw"
            >
              <HamburgerIcon />
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="top"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent bg="purple">
                <DrawerCloseButton />
                <DrawerHeader textAlign="center">Welcome!</DrawerHeader>
                <DrawerBody>
                  <VStack spacing={12}>
                    <Button
                      mt="10"
                      w="80%"
                      onClick={() => scrollToSection(homeRef)}
                    >
                      Home
                    </Button>
                    <Button w="80%" onClick={() => scrollToSection(aboutRef)}>
                      About ME
                    </Button>
                    <Button w="80%" onClick={() => scrollToSection(skillsRef)}>
                      My Skills
                    </Button>
                    <Button
                      w="80%"
                      onClick={() => scrollToSection(projectsRef)}
                    >
                      My Projects
                    </Button>
                    <Button
                      w="80%"
                      onClick={() => scrollToSection(experienceRef)}
                    >
                      Experience
                    </Button>
                    <Button w="80%" onClick={() => scrollToSection(contactRef)}>
                      Contact
                    </Button>

                    <Button w="80%">
                  <Link  href="Raveena-Banduni-fullstackResume.pdf"
                download="Raveena-Banduni-fullstackResume.pdf"
                onClick={openResume}>Resume</Link>
                    </Button>
                  </VStack>
                </DrawerBody>
                <DrawerFooter></DrawerFooter>
              </DrawerContent>
            </Drawer>
          </>
        ) : (
          <Breadcrumb
            fontSize={18}
            fontWeight="bold"
            spacing="2vw"
            separator=""
          >
            <BreadcrumbItem>
              <BreadcrumbLink
                href="#"
                color="rgba(147, 112, 219, 1)"
                textDecoration="none"
                _hover={{
                  backgroundColor: "purple",
                  color: "black",
                  borderRadius: "20px",
                }}
                onClick={() => scrollToSection(homeRef)}
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink
                href="#about"
                textDecoration="none"
                color="rgba(147, 112, 219, 1)"
                _hover={{
                  backgroundColor: "purple",
                  color: "black",
                  borderRadius: "20px",
                }}
                onClick={() => scrollToSection(aboutRef)}
              >
                About
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink
                href="#skills"
                textDecoration="none"
                color="rgba(147, 112, 219, 1)"
                _hover={{
                  backgroundColor: "purple",
                  color: "black",
                  borderRadius: "20px",
                }}
                onClick={() => scrollToSection(skillsRef)}
              >
                Skills
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink
                href="#projects"
                textDecoration="none"
                color="rgba(147, 112, 219, 1)"
                _hover={{
                  backgroundColor: "purple",
                  color: "black",
                  borderRadius: "20px",
                }}
                onClick={() => scrollToSection(projectsRef)}
              >
                Projects
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink
                href="#experience"
                color="rgba(147, 112, 219, 1)"
                textDecoration="none"
                _hover={{
                  backgroundColor: "purple",
                  color: "black",
                  borderRadius: "20px",
                }}
                onClick={() => scrollToSection(experienceRef)}
              >
                Experience
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink
                href="#contact"
                color="rgba(147, 112, 219, 1)"
                textDecoration="none"
                _hover={{
                  backgroundColor: "purple",
                  color: "black",
                  borderRadius: "20px",
                }}
                onClick={() => scrollToSection(contactRef)}
              >
                Contact
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem className="heartbeat">
              <BreadcrumbLink 
                href="Raveena-Banduni-fullstackResume.pdf"
                download="Raveena-Banduni-fullstackResume.pdf"
                onClick={openResume}
                color="rgba(147, 112, 219, 1)"
                _hover={{
                  backgroundColor: "purple",
                  color: "black",
                  borderRadius: "20px",
                }}
              >
                Resume
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        )}
      </Flex>

      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={experienceRef}>
        <Experience />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
}



