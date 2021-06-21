import React from "react";
import { Flex, Center, List, ListIcon, ListItem, Box } from "@chakra-ui/layout";
import { MdDashboard } from "react-icons/all";
import { Avatar } from "@chakra-ui/react";

const SideNav = () => {
  return (
    <Flex
      color="white"
      flexDirection="column"
      p="4"
      bg="gray.800"
      minH="100vh"
      justifyItems="center"
    >
      <Box h="30" alignSelf="center">
        <Avatar
          name="Logo"
          src="https://img.icons8.com/color/96/000000/clock--v3.png"
        />
      </Box>
      <Box h="50" marginY="60px">
        <List spacing={4}>
          <ListItem color="gray.300" cursor="pointer">
            <ListIcon as={MdDashboard} color="gray.300" />
            Dashboard
          </ListItem>
        </List>
      </Box>
    </Flex>
  );
};

export default SideNav;
