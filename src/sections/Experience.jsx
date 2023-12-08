import { Container, Heading, Text, Box } from '@chakra-ui/react';
import React from 'react';
import "./Experiencs.css"
export default function Experience() {
  const boldStyle = { fontWeight: 'bold', color: 'purple' ,fontSize:"18px" }; 

  return (
    <div style={{  width: '100%', height:"auto", backgroundColor:"" }} >
      <Heading textAlign="center" mt="7vh">
        Experience
      </Heading>
      <Box
      
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      w={{base:"80%",md:"100%" ,lg:"120vh"}}
      // h={{base:"80vh",md:"60vh" ,lg:"50vh"}}
      h="auto"
        mt="10vh" 
         mx="auto" border="2px" className='shake-horizontal' borderRadius="35px">
        <Text textAlign="center" mt="6vh" fontSize="18px" fontWeight="600">
          Job Title:  <span style={boldStyle} >Diploma Engineer Trainee</span>
        </Text>
        <Text mt="1vh" textAlign="center" fontSize="18px" fontWeight="600">
          Company Name: <span style={boldStyle} >Escorts Kubota Limited , Faridabad</span>

        </Text>
        <Text mt="1vh" textAlign="center" fontSize="18px" fontWeight="600">
          <span style={boldStyle}>Duration:  </span> 06/AUG/2021 - 30/APRIL/2023
        </Text>
        <Text mt="1vh" textAlign="center" fontSize="18px" fontWeight="600">
          <span style={boldStyle}>Description:</span> <br />  In the hydraulic lift production sector, I
          oversaw manufacturing operations, ensuring quality standards, and collaborated with teams
          to streamline processes. Additionally, in the quality and store departments, I conducted
          quality checks, managed inventory, and coordinated procurement activities, ensuring smooth
          production workflows.
        </Text>
      </Box>
    </div>
  );
}
