import { FC } from "react";
import { Tr, Td, Stack, Tooltip, Box, Text, Flex } from "@chakra-ui/react";
import {
    BsFileEarmarkBarGraph,
    BsFileEarmarkPerson,
    BsPencilSquare,
} from "react-icons/bs";

import dayjs from "dayjs";
import { Modal } from "../Shared/modal";
import { EmployeeForm } from "@/packages/employees/resources/components/employee-form";

type Props = {
    employee: EmployeeI;
};

export const EmployeeRow: FC<Props> = ({ employee }) => {
    return (
        <Tr key={employee.id} fontSize={"xs"}>
            <Td>{employee.name}</Td>
            <Td>{employee.email}</Td>
            <Td>
                <Flex
                    justify={"center"}
                    align={"center"}
                    w="8"
                    h="8"
                    bg={employee.probatory ? "green.300" : "red.100"}
                    color={employee.probatory ? "black" : "red.800"}
                    rounded={"full"}
                >
                    <Text textAlign={"center"} fontSize={"lg"}>
                        {employee.probatory ? "✓" : "✕"}
                    </Text>
                </Flex>
            </Td>
            <Td>
                <Flex
                    justify={"center"}
                    align={"center"}
                    w="8"
                    h="8"
                    bg={employee.hired ? "yellow.300" : "red.100"}
                    color={employee.hired ? "black" : "red.800"}
                    rounded={"full"}
                >
                    <Text textAlign={"center"} fontSize={"lg"}>
                        {employee.hired ? "✓" : "✕"}
                    </Text>
                </Flex>
            </Td>
            <Td>
                {" "}
                {employee.hired
                    ? dayjs(employee.hired_at).format("MMMM D, YYYY")
                    : "Not Hired."}
            </Td>
            <Td>
                <Stack direction={"row"}>
                    <Tooltip label={"Perform Review"} placement="top">
                        <Box cursor={"pointer"} p={2} mr="2">
                            <BsFileEarmarkPerson />
                        </Box>
                    </Tooltip>
                    <Tooltip label={"View Employee Reviews"} placement="top">
                        <Box cursor={"pointer"} p={2} mr="2">
                            <BsFileEarmarkBarGraph />
                        </Box>
                    </Tooltip>

                    <Modal
                        title={"Edit Employee"}
                        buttonLabel={
                            <Tooltip label={"Edit Employee"} placement="top">
                                <Box cursor={"pointer"} p={2} mr="2">
                                    <BsPencilSquare />
                                </Box>
                            </Tooltip>
                        }
                    >
                        <EmployeeForm employee={employee} />
                    </Modal>
                </Stack>
            </Td>
        </Tr>
    );
};
