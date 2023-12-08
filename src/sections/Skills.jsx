import React from "react";
import GitHubCalendar from "react-github-calendar";

import "./Skills.css";
import {
  Flex,
  Heading,
  Image,
  Box,
  Text,
  Container,
  Grid,
  GridItem,
  Center,
} from "@chakra-ui/react";

export default function Skills() {
  const imageUrls = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtlP1J5mqNncn2K0krgyKWzIAEbskKWwgC1Q&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ0dbGGNIZr9aedsSgGnhi0Au54LG5Ju4V7g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Nouv2ELZ51yZUiguCW6mw0EFrQYTebbAmg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-UgpOv6DIROvYZyytFfZlViGfNPlFzozqbw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWtd0SJ0g8MXgVkMGYzIExzYveuMJCQ4Zffg&usqp=CAU",
  ];

  const anotherImageUrls = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnMptjo8yBc3oV6LavqNnWoF4K4c6g2pfjcg&usqp=CAU" ,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREknA6QiQtX1p7lxA6GlcuaiNtApJvA9Bxaw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXhMAPnzsnAA3AEdlQABcGlkdwt8NHJ0pqOg&usqp=CAU",
    
  ];


  const frontendText = [
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Chakra UI",
  ];

  const toolsText = [
    "VS Code",
    "Postman",
    "Git",
   
  ];


  return (
    <Box
      style={{
        // border: "2px solid black",
        height: "auto",
        width: "100%",
        // backgroundColor: "rgba(147, 112, 219, 1)"
        
      }}
    >
      <Box bg="rgba(147, 112, 219, 1)"  border="2px solid white" h={{md:"180vh",lg:"auto"}} >
      <Heading textAlign="center"  color="" >Tech Skills</Heading>
      <Flex justify="space-evenly" mt="5vh" 
      direction={{base:"column",md:"row",lg:"row"}} 
      >
        <Box 
    //  bg=        "rgba(147, 112, 219, 1)"
     
        // border="2px"
         h="120vh" w="100%" mt="8vh">
          <Heading textAlign="center" color="purple" mb="10vh"
                    // mr={{base:"35vh" ,md:"0vh" ,lg:"0vh"}}

          >Frontened</Heading>

          <Grid
            templateColumns={{ base: "1fr", md: "repeat(1, 1fr)" ,lg:"repeat(2,1fr)" }}
            gap={9}
            mt="5vh"
            ml="12vh"
            justify="space-evenly"
            align="center"
          >
            {imageUrls.map((url, index) => (
              <GridItem
                key={index}
                w="25vh"
                h={{base:"15vh",md:"25vh",lg:"25vh"}}
             
              >
               

                <Image
                  src={url}
                  alt={`Image ${index + 1}`}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  className="wobble-hor-bottom"
                  ml={{base:"5vh",md:"-5vh",lg:"0vh"}}

                />

<Text textAlign="center" color="white" mt="2vh">
                {frontendText[index]}
              </Text>

              </GridItem>
            ))}
          </Grid>
        </Box>

        <Box
        //  border="2px"
        // bg=        "rgba(147, 112, 219, 1)"

         h="auto" w="100%" mt="8vh">
          <Heading textAlign="center" color="purple" mb="10vh" 
          // mr={{base:"35vh" ,md:"0vh" ,lg:"0vh"}}
          >Tools</Heading>
          <Grid 
          templateColumns={{ base: "1fr", md: "repeat(1, 1fr)",lg:"repeat(2,1fr)" }}
           gap={9} mt="5vh"
            ml="12vh" 
            >
            {anotherImageUrls.map((url, index) => (
              <GridItem
                key={index}
                w={{base:"100%",md:"100%",lg:"25vh"}}

                // w="25vh"
                h="25vh"
                justify="space-evenly"

              >
                <Image
                  src={url}
                  alt={`Image ${index + 1}`}
                  // w="100%"
                  objectFit="cover"
                  className="wobble-hor-bottom"
                  w={{base:"25vh",md:"100%",lg:""}}
                  h={{base:"15vh",md:"25vh",lg:"25vh"}}
                  ml={{base:"5vh",md:"-5vh",lg:"0vh"}}

                />

<Text textAlign="center" color="white" mt="vh">
                {toolsText[index]}
              </Text>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Flex>
      </Box>

      <Box mt={{base:"0vh",md:"10vh",lg:"0"}} >
      <Heading textAlign="center" color="purple" mt="8vh"> Github Contribution</Heading>
      <Box ml="25vw" w={{ base: "50%", md: "50%", lg: "80%" }}  mt="2vh" >

        <GitHubCalendar
          className="react-activity-calendar"
          color="skyblue"
          username="Raveena99999"
        />
      </Box>
      <Flex w={{ base: "100%", md: "100%", lg: "80%" }} justify={{ base: "center", md: "center", lg: "space-between" }} m="auto">
        <Box w="300px">
          <img
            id="github-stats-card"
            width="100%"
            src="https://github-readme-stats.vercel.app/api?username=Raveena99999&theme=transparent&hide_border=true&show_icons=true&locale=en&title_color=white&text_color=white"
          />
        </Box>
      <Box w="300px">
        <img
          id="github-top-langs"
          width="100%"
          src="https://github-readme-stats.vercel.app/api/top-langs?username=Raveena99999&theme=transparent&hide_border=true&show_icons=true&locale=en&layout=compact&title_color=white&text_color=white"
        />
      </Box>
      </Flex>
      <Box w={{ base: "50%", md: "50%", lg: "50%" }} m="auto" bg="black" >
        <img
          id="github-streak-stats"
          width="100%"
          src="https://github-readme-streak-stats.herokuapp.com/?user=Raveena99999&theme=transparent&hide_border=true&title_color=white&text_color=white&sideNums=white&sideLabels=white&ring=white&fire=white&currStreakLabel=white&currStreakNum=white"
          alt=""
        />
      </Box>
      </Box>

    </Box>
  );
}
