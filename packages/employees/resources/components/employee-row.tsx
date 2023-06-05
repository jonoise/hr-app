import { FC } from "react";
import { Tr, Td, Stack, Tooltip, Box, Text, Flex } from "@chakra-ui/react";

import {
    BsFileEarmarkBarGraph,
    BsFileEarmarkPerson,
    BsPencilSquare,
} from "react-icons/bs";

import dayjs from "dayjs";
import { Modal } from "../../../../resources/js/components/Shared/modal";
import { EmployeeForm } from "@/packages/employees/resources/components/employee-form";
import { EmployeeReviewList } from "../../../../resources/js/components/dashboard/employee-review-list";
import { ReviewForm } from "@/packages/reviews/resources/components/form";

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
                {employee.hired
                    ? dayjs(employee.hired_at).format("MMMM D, YYYY")
                    : "Not Hired."}
            </Td>
            <Td>
                <Stack direction={"row"}>
                    <Modal
                        title={`Perform Review for ${employee.name}`}
                        buttonLabel={
                            <Tooltip
                                label={"Perform Employee Review"}
                                placement="top"
                            >
                                <Box cursor={"pointer"} p={2} mr="2">
                                    <BsFileEarmarkPerson />
                                </Box>
                            </Tooltip>
                        }
                    >
                        <ReviewForm />
                    </Modal>
                    <Modal
                        title="Employee Reviews"
                        modalProps={{ size: "2xl" }}
                        buttonLabel={
                            <Tooltip
                                label={"View Employee Reviews"}
                                placement="top"
                            >
                                <Box cursor={"pointer"} p={2} mr="2">
                                    <BsFileEarmarkBarGraph />
                                </Box>
                            </Tooltip>
                        }
                    >
                        <EmployeeReviewList employeeId={employee.id!} />
                    </Modal>

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
