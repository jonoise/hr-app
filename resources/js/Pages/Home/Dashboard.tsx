import { Flex, Stack, Text } from "@chakra-ui/react";
import MainLayout from "../../components/Shared/main-layout";
import { DashboardSidebar } from "../../components/Shared/dashboard-sidebar";
import { FC } from "react";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import { EmployeeRow } from "../../components/dashboard/employee-row";
import { Modal } from "../../components/Shared/modal";
import { EmployeeForm } from "@/packages/employees/resources/components/employee-form";

const Dashboard: FC<{ employees: EmployeeI[] }> = (props) => {
    const { employees } = props;
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

export default Dashboard;
