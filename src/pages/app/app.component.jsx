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
    <div className="app-container">
      <Flex data-testid="child-component">
        <SideNav data-testid="child-component" />
        <Box data-testid="child-component" flex="1" m="3">
          <Flex data-testid="child-component" flexDirection="column">
            <Header data-testid="child-component" counts={total} />
            <Absences data-testid="child-component" />
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default AppComponent;
