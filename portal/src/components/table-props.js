import { Spinner } from "@chakra-ui/react";
import { Tbody, Td, Tr } from "@chakra-ui/react";
import Empty from "./empty";
import { Center } from "@chakra-ui/layout";

const TableProps = ({ span, loading = false, empty = false }) => {
  return (
    <Tbody>
      <Tr>
        <Td colSpan={span} align="center">
          {loading && (
            <Center>
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Center>
          )}
          {empty && <Empty />}
        </Td>
      </Tr>
    </Tbody>
  );
};

export default TableProps;
