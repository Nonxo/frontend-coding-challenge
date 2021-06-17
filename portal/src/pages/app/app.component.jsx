import React, { useEffect, useState } from "react";
import "./app.styles.scss";
import { Box, Flex } from "@chakra-ui/layout";
import SideNav from "../../components/side-nav/side-nav";
import Header from "../../components/header/header";
import DashboardAbsences from "./dashboard/dashboard.component";
import { useSelector } from "react-redux";

const AppComponent = () => {
  const absenteesSelector = useSelector((state) => state.Absentees);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (absenteesSelector) {
      setTotal(absenteesSelector.membersList.length);
    }
  }, [absenteesSelector]);

  return (
    <div className="app-container">
      <Flex>
        <SideNav />
        <Box flex="1" m="3">
          <Flex flexDirection="column">
            <Header counts={total} />
            <DashboardAbsences />
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default AppComponent;
