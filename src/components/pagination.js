import React, { useEffect, useState } from "react";
import {
  Flex,
  IconButton,
  Text,
  Tooltip,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import {
  ArrowRightIcon,
  ArrowLeftIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";

const Pagination = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { pageCount, gotoPage, setPageSize, pageSize, total } = props;

  useEffect(() => {
    gotoPage(currentPage, pageSize);
  }, [total]);

  return (
    <Flex justifyContent="space-between" m={4} alignItems="center">
      <Flex>
        <Tooltip label="First Page">
          <IconButton
            onClick={() => {
              setCurrentPage(1);
              gotoPage(1, pageSize);
            }}
            isDisabled={currentPage === 1}
            icon={<ArrowLeftIcon h={3} w={3} />}
            mr={4}
            borderRadius="5px"
          />
        </Tooltip>
        <Tooltip label="Previous Page">
          <IconButton
            onClick={() => {
              setCurrentPage(currentPage - 1);
              gotoPage(currentPage - 1, pageSize);
            }}
            isDisabled={currentPage === 1}
            icon={<ChevronLeftIcon h={6} w={6} />}
            borderRadius="5px"
          />
        </Tooltip>
      </Flex>

      <Flex alignItems="center">
        <Text flexShrink="0" fontWeight="bold" fontSize="12px">
          Go to page:
        </Text>{" "}
        <NumberInput
          ml={2}
          mr={8}
          w={28}
          min={1}
          size="sm"
          max={pageCount}
          onChange={(value) => {
            const page = value ? parseInt(value) : 0;
            setCurrentPage(page);
            gotoPage(page, pageSize);
          }}
          value={currentPage}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Select
          w={32}
          value={pageSize}
          size="sm"
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
          isDisabled={true}
        >
          {[10, 20].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </Select>
      </Flex>

      <Flex>
        <Tooltip label="Next Page" aria-label="Tooltip">
          <IconButton
            onClick={() => {
              setCurrentPage(currentPage + 1);
              gotoPage(currentPage + 1, pageSize);
            }}
            isDisabled={currentPage === pageCount}
            icon={<ChevronRightIcon h={6} w={6} />}
            borderRadius="5px"
          />
        </Tooltip>
        <Tooltip label="Last Page" aria-label="Tooltip">
          <IconButton
            onClick={() => {
              setCurrentPage(pageCount);
              gotoPage(pageCount, pageSize);
            }}
            isDisabled={currentPage === pageCount}
            icon={<ArrowRightIcon h={3} w={3} />}
            ml={4}
            borderRadius="5px"
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default Pagination;
