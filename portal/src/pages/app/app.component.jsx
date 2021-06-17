import React from "react";
import "./app.styles.scss";
import { Box, Flex } from "@chakra-ui/layout";
import SideNav from "../../components/side-nav/side-nav";

const AppComponent = () => {
  return (
    <div className="app-container">
      <Flex>
        <SideNav />
        <Box flex="1" bg="tomato"></Box>
      </Flex>
    </div>
  );
};

export default AppComponent;
