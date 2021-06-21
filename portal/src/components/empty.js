import { Box, Center, Flex } from "@chakra-ui/layout"
import React from "react"
import empty from '../assets/images/empty.svg'


const Empty = () => {
    return (
        <React.Fragment>
            <Center>
                <Box>
                    <img src={empty}  alt="Empty state" />
                </Box>
                <Box as="h4">
                    Sorry we cannot find any record
                </Box>
            </Center>
        </React.Fragment>
    )
}

export default Empty