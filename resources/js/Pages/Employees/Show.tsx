import { FC, useState } from "react";
import MainLayout from "../../components/Shared/main-layout";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer,
    Stack,
    Flex,
    Text,
} from "@chakra-ui/react";
import { EmployeeRow } from "../../../../packages/employees/resources/components/employee-row";
import { Modal } from "../../components/Shared/modal";
import { EmployeeForm } from "@/packages/employees/resources/components/employee-form";
import { DashboardSidebar } from "../../components/Shared/dashboard-sidebar";
const Show: FC<{ employees: EmployeeI[] }> = ({ employees }) => {
    const [emps, setEmployees] = useState(employees);

    return (
        <MainLayout>
            <Flex position={"relative"}>
                <DashboardSidebar />
                <Stack w={"100%"} bg={"gray.100"} p={4}>
                    <Flex
                        justify={"space-between"}
                        align={"center"}
                        borderBottom={"1px solid #ddd"}
                        pb={10}
                    >
                        <Text fontSize={"xl"} fontWeight={"bold"}>
                            Employees
                        </Text>
                        <Modal
                            buttonLabel="Add Employee"
                            title="Add Employee"
                            buttonProps={{
                                bg: "green.400",
                                color: "white",
                                _hover: {
                                    bg: "green.500",
                                },
                                px: 8,
                                py: 2,
                                rounded: "full",
                            }}
                        >
                            <EmployeeForm />
                        </Modal>
                    </Flex>
                    <TableContainer>
                        <Table variant={"simple"}>
                            <Thead>
                                <Tr>
                                    <Th>Name</Th>
                                    <Th>Email</Th>
                                    <Th>Probatory</Th>
                                    <Th>Hired</Th>
                                    <Th>Hired Date</Th>
                                    <Th>Actions</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {employees.map((employee) => (
                                    <EmployeeRow
                                        key={employee.id}
                                        employee={employee}
                                    />
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Stack>
            </Flex>
        </MainLayout>
    );
};

export default Show;
