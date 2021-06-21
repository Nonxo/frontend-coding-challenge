import React from "react";
import { Select, Input, Text } from "@chakra-ui/react";
import { HStack, VStack } from "@chakra-ui/layout";

const AbsencesSearch = (props) => {
  const { absenceTypes } = props;
  return (
    <React.Fragment>
      <HStack spacing="24px">
        <VStack>
          <Text position="relative" right="42" mb="4px" fontSize="12px">
            Filter by absence type
          </Text>
          <Select
            variant="filled"
            w="fit-content"
            placeholder="Filter by absence type"
          >
            {absenceTypes &&
              absenceTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
          </Select>
        </VStack>
        <VStack>
          <Text position="relative" right="46" mb="4px" fontSize="12px">
            Filter by date
          </Text>
          <Input
            type="date"
            variant="filled"
            w="fit-content"
            placeholder="Filter by Date"
          />
        </VStack>
      </HStack>
    </React.Fragment>
  );
};

export default AbsencesSearch;
