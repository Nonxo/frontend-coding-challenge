import React, { useEffect, useState } from "react";
import "./app.styles.scss";
import { Box, Flex } from "@chakra-ui/layout";
import SideNav from "../../components/side-nav/side-nav";
import Header from "../../components/header/header";
import { useSelector } from "react-redux";
import Absences from "./dashboard/absences";

const AppComponent = () => {
  const absencesSelector = useSelector((state) => state.Absentees);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (absencesSelector.data) {
      setTotal(absencesSelector.data.length);
    }
  }, [absencesSelector]);

  return (
    <div data-testid="app-container" className="app-container">
      <Flex>
        <SideNav />
        <Box flex="1" m="3">
          <Flex flexDirection="column">
            <Header counts={total} />
            <Absences />
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default AppComponent;
