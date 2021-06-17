import React from "react";
import { Box, Center, Flex, Heading, Spacer, Text } from "@chakra-ui/layout";
import { Avatar, extendTheme } from "@chakra-ui/react";

const Header = ({ counts }) => {
  const theme = extendTheme({
    textStyles: {
      h1: {
        fontSize: "24px",
        fontWeight: "bold",
        letterSpacing: "0.5",
      },
      h5: {
        fontSize: "12px",
        fontWeight: "normal",
        letterSpacing: "0.2",
      },
    },
  });

  return (
    <Flex>
      <Box m="3">
        <Heading size="lg" fontFamily="Overpass">
          Absentees
          <Text
            display="inline-flex"
            fontSize="sm"
            letterSpacing="0.2"
            fontWeight="500"
            color="gray.500"
            pl="5px"
          >
            {counts} Total absentees
          </Text>
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <Box></Box>
        <Flex>
          <Center>
            <Text
              fontFamily="Overpass"
              fontStyle="14px"
              fontSize="14px"
              letterSpacing="0.2px"
              color="#252733"
              p="2"
            >
              Administrator
            </Text>
          </Center>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
