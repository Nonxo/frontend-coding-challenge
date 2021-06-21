import { Tbody, Tr, Td } from "@chakra-ui/react";
import React from "react";
import TableProps from "../table-props";
import { Utils } from "../../utils/utils";
import { Avatar } from "@chakra-ui/avatar";
import { Badge } from "@chakra-ui/layout";

const AbsenceList = (props) => {
  const { absenceSelector, listOfMembers } = props;

  // To display an absentee name
  const displayMemberName = (id) => {
    if (id && listOfMembers.length > 0) {
      debugger;
      const result = listOfMembers.find((member) => member.userId === id);
      return result.name;
    }
  };

  // To display an absentee avatar
  const displayMemberImage = (id) => {
    if (id && listOfMembers.length > 0) {
      debugger;
      const result = listOfMembers.find((member) => member.userId === id);
      return result.image;
    }
  };

  return (
    <React.Fragment>
      {!absenceSelector.loading && absenceSelector.membersList.length < 1 ? (
        <TableProps span="7" empty={true} />
      ) : (
        <Tbody>
          {absenceSelector.membersList.map((absence, index) => (
            <Tr key={index}>
              <Td fontSize="12px">
                <Avatar
                  size="sm"
                  name={displayMemberName(absence.userId)}
                  src={displayMemberImage(absence.userId)}
                />
              </Td>
              <Td fontSize="12px">{displayMemberName(absence.userId)}</Td>
              <Td fontSize="12px">{absence.type}</Td>
              <Td fontSize="12px">
                {new Date(absence.startDate).toLocaleDateString()} -{" "}
                {new Date(absence.endDate).toLocaleDateString()}
              </Td>
              <Td fontSize="12">{absence.memberNote}</Td>
              <Td>
                <Badge
                  p="2"
                  colorScheme={
                    absence.confirmedAt
                      ? "green"
                      : absence.rejectedAt
                      ? "red"
                      : "orange"
                  }
                  fontSize="12"
                >
                  {Utils.getAbsenceStatus(absence)}
                </Badge>
              </Td>
              <Td fontSize="12px">{absence.admitterNote}</Td>
            </Tr>
          ))}
        </Tbody>
      )}
    </React.Fragment>
  );
};

export default AbsenceList;
