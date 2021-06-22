import React, { useEffect } from "react";
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
  const absencesSelector = useSelector((state) => state.Absentees);
  const dispatch = useDispatch();
  const limit = 10;

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
    if (absencesSelector.membersList) {
      const result = absencesSelector.membersList.map(
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
  const handlePageChange = (page, size) => {
    const start = (page - 1) * size;
    const end = page * size;
    dispatch(
      handleRequest(types.FETCH_ABSENTEES_PAGINATION, {
        start,
        end,
      })
    );
  };

  return (
    <React.Fragment>
      <Box m="4">
        <AbsencesSearch
          absenceTypes={getAllAbsenceType()}
          handleTypeChange={handleFilterByType}
          handleDateChange={handleFilterByDate}
        />
        <Table variant="simple" mt="20px">
          {!absencesSelector.loading &&
            absencesSelector.membersList.length < 1 && (
              <TableCaption>Sorry we cannot find any record</TableCaption>
            )}
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
          {absencesSelector.loading ? (
            <TableProps span={7} loading={true} />
          ) : (
            <AbsenceList
              absenceSelector={absencesSelector}
              listOfMembers={membersSelector.listOfAllMembers}
            />
          )}

          <Tfoot></Tfoot>
        </Table>
        {absencesSelector.membersList && (
          <Pagination
            pageCount={Math.ceil(absencesSelector.total / limit)}
            pageIndex={0}
            pageSize={limit}
            gotoPage={handlePageChange}
            total={absencesSelector.total}
          />
        )}
      </Box>
    </React.Fragment>
  );
};

export default Absences;
