import React from "react";
import { Flex, List, ListIcon, ListItem, Box } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

const SideNav = () => {
  return (
    <Flex
      color="DDE2FF"
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
        <List spacing={4} color="DDE2FF">
          <ListItem color="gray.300" cursor="pointer">
            <EditIcon h={6} w={6} pr={2} />
            Dashboard
          </ListItem>
        </List>
      </Box>
    </Flex>
  );
};

export default SideNav;
