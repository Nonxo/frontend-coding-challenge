import { Spinner } from "@chakra-ui/spinner"
import { Tbody, Td, Tr } from "@chakra-ui/table"
import Empty from "./empty"

const TableProps = ({span, loading=false, empty=false}) => {
    return (
        <Tbody>
            <Tr>
                <Td colSpan={span} align="center">
                    {loading && (<Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl"/>)}
                    {empty && <Empty />}
                </Td>
            </Tr>
        </Tbody>
    )
}

export default TableProps