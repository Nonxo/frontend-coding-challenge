import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  ButtonProps,
} from "@chakra-ui/react";
import { Badge, Box, HStack } from "@chakra-ui/layout";
import { useDispatch, useSelector } from "react-redux";
import { handleRequest } from "../../../redux/actions/actionCreator";
import * as types from "../../../redux/actions";
import { Utils } from "../../../utils/utils";
import { Avatar } from "@chakra-ui/avatar";
import { PageGroup, Paginator, usePaginator } from "chakra-paginator";
import { Select } from "@chakra-ui/select";

const DashboardAbsences = () => {
  const dispatch = useDispatch();
  const membersSelector = useSelector((state) => state.Members);
  const absenteesSelector = useSelector((state) => state.Absentees);
  const [listOfMembers, setListOfMembers] = useState([]);
  const [listOfAbsentees, setListOfAbsentees] = useState([]);

  const {
    currentPage,
    setCurrentPage,
    pagesQuantity,
    setPageSize,
    pageSize,
  } = usePaginator({
    initialState: {
      pageSize: 10,
      currentPage: 1,
    },
  });

  useEffect(() => {
    const indexOfLastAbsentee = currentPage * pageSize;
    const indexOfFirstAbsentee = indexOfLastAbsentee - pageSize;
    const result = listOfAbsentees.slice(
      indexOfFirstAbsentee,
      indexOfLastAbsentee
    );
    setListOfAbsentees(result);
  }, [currentPage, pageSize]);

  // Fetch all members
  const getAllMembers = () => {
    dispatch(handleRequest(types.FETCH_MEMBERS));
  };

  //Fetch all Absentees
  const getAllAbsentees = () => {
    dispatch(handleRequest(types.FETCH_ABSENTEES));
  };

  useEffect(() => {
    getAllMembers();
    getAllAbsentees();
  }, []);

  // Temporarily store all Absentees
  useEffect(() => {
    setListOfAbsentees(absenteesSelector.membersList);
  }, [absenteesSelector]);

  // Temporarily store all Members
  useEffect(() => {
    setListOfMembers(membersSelector.listOfAllMembers);
  }, [membersSelector]);

  // To display an absentee name
  const displayMemberName = (id) => {
    const result = listOfMembers.find((member) => member.userId === id);
    return result.name;
  };

  // To display an absentee avatar
  const displayMemberImage = (id) => {
    const result = listOfMembers.find((member) => member.userId === id);
    return result.image;
  };

  // constants
  const outerLimit = 2;
  const innerLimit = 2;

  // Pagination styles
  const baseStyles: ButtonProps = {
    w: 7,
    fontSize: "sm",
  };

  const normalStyles: ButtonProps = {
    ...baseStyles,
    _hover: {
      bg: "green.300",
    },
    bg: "red.300",
  };

  const activeStyles: ButtonProps = {
    ...baseStyles,
    _hover: {
      bg: "blue.300",
    },
    bg: "green.300",
  };

  const seperatorStyles: ButtonProps = {
    w: 7,
    bg: "green.200",
  };

  // Handle page changes
  const handlePageChange = (nextPage) => {
    setCurrentPage(nextPage);
  };

  return (
    <Box m="4">
      <Paginator
        pagesQuantity={pagesQuantity}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        outerLimit={outerLimit}
        innerLimit={innerLimit}
        normalStyles={normalStyles}
        seperatorStyles={seperatorStyles}
      >
        <PageGroup isInline align="center" />
      </Paginator>
      <HStack spacing="24px">
        <Select
          variant="filled"
          w="fit-content"
          placeholder="Filter by absence type"
        />
      </HStack>
      {listOfAbsentees && (
        <Table variant="simple" mt="20px">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th></Th>
              <Th>Member Name</Th>
              <Th>Type of Absence</Th>
              <Th>Period</Th>
              <Th>Member Note</Th>
              <Th>Status</Th>
              <Th>Admitter Note</Th>
            </Tr>
          </Thead>
          {listOfAbsentees &&
            listOfAbsentees.map((absentee, index) => (
              <Tbody>
                <Tr key={index}>
                  <Td>
                    <Avatar
                      name={displayMemberName(absentee.userId)}
                      src={displayMemberImage(absentee.userId)}
                    />
                  </Td>
                  <Td>{displayMemberName(absentee.userId)}</Td>
                  <Td>{absentee.type}</Td>
                  <Td>
                    {new Date(absentee.startDate).toLocaleDateString()} -{" "}
                    {new Date(absentee.endDate).toLocaleDateString()}
                  </Td>
                  <Td>{absentee.admitterNote}</Td>
                  <Td>
                    <Badge p="2" colorScheme="red">
                      {Utils.getAbsenceStatus(
                        absentee.rejectedAt === null
                          ? absentee.confirmedAt
                          : absentee.rejectedAt
                      )}
                    </Badge>
                  </Td>
                </Tr>
              </Tbody>
            ))}
          <Tfoot></Tfoot>
        </Table>
      )}
    </Box>
  );
};

export default DashboardAbsences;
