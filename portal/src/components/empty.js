import { Box, Center, Flex } from "@chakra-ui/layout";
import React from "react";
import empty from "../assets/images/empty.svg";

const Empty = () => {
  return (
    <React.Fragment>
      <Center>
        <Box>
          <img src={empty} alt="Empty state" />
        </Box>
      </Center>
    </React.Fragment>
  );
};

export default Empty;
