import React, { useEffect, useState } from "react";
import { Table, Thead, Tfoot, Tr, Th, TableCaption } from "@chakra-ui/react";
import { Box } from "@chakra-ui/layout";
import { useDispatch, useSelector } from "react-redux";
import TableProps from "../../../components/table-props";
import AbsenceList from "../../../components/absences/absences-list";
import AbsencesSearch from "../../../components/absences/absences-search";
import Pagination from "../../../components/pagination";
import { handleRequest } from "../../../redux/actions/actionCreator";
import * as types from "../../../redux/actions";

const Absences = () => {
  const membersSelector = useSelector((state) => state.Members);
  const absenteesSelector = useSelector((state) => state.Absentees);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const indexOfLastAbsentee = currentPage * pageSize;
  //   const indexOfFirstAbsentee = indexOfLastAbsentee - pageSize;
  //   const result = listOfAbsentees.slice(
  //     indexOfFirstAbsentee,
  //     indexOfLastAbsentee
  //   );
  //   setListOfAbsentees(result);
  // }, [currentPage, pageSize]);

  // Dispatch all member's action
  const getAllMembers = () => {
    dispatch(handleRequest(types.FETCH_MEMBERS));
  };

  useEffect(() => {
    getAllMembers();
  }, []);

  // Dispatch all absentees's action
  const getAllAbsentees = () => {
    dispatch(handleRequest(types.FETCH_ABSENTEES));
  };

  //Fetch all Absentees & Members
  useEffect(() => {
    getAllAbsentees();
  }, []);

  // Get all absence types
  const getAllAbsenceType = () => {
    if (absenteesSelector.membersList) {
      const result = absenteesSelector.membersList.map(
        (absentee) => absentee.type
      );
      return [...new Set(result)];
    }
  };

  // To filter absences by type
  const handleFilterByType = (event) => {
    const type = event.target.value;
    dispatch(handleRequest(types.FILTER_BY_TYPE, type));
  };

  // To filter absences by date
  const handleFilterByDate = (event) => {
    const date = new Date(event.target.value).toISOString();
    dispatch(handleRequest(types.FILTER_BY_DATE, date));
  };

  // Handle page changes
  const handlePageChange = (nextPage) => {};

  return (
    <React.Fragment>
      <Box m="4">
        <AbsencesSearch
          absenceTypes={getAllAbsenceType()}
          handleTypeChange={handleFilterByType}
          handleDateChange={handleFilterByDate}
        />
        <Table variant="simple" mt="20px">
          <TableCaption>Table showing all absence request</TableCaption>
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
          {absenteesSelector.loading ? (
            <TableProps span={7} loading={true} />
          ) : (
            <AbsenceList
              absenceSelector={absenteesSelector}
              listOfMembers={membersSelector.listOfAllMembers}
            />
          )}

          <Tfoot></Tfoot>
        </Table>
        {absenteesSelector.membersList && (
          <Pagination
            pageOptions={absenteesSelector.membersList}
            pageIndex={0}
          />
        )}
      </Box>
    </React.Fragment>
  );
};

export default Absences;
