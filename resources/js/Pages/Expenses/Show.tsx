import { ExpenseI } from "@/packages/expenses/types/expense";
import React, { FC } from "react";
import MainLayout from "../../components/Shared/main-layout";
import {
    Button,
    Flex,
    Stack,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import { DashboardSidebar } from "../../components/Shared/dashboard-sidebar";
import { Modal } from "../../components/Shared/modal";
import { RunPayroll } from "@/packages/expenses/resources/components/run";

type Props = {
    expenses: ExpenseI[];
};

const ShowExpenses: FC<Props> = (props) => {
    const { expenses } = props;
    console.log(expenses);
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
                            Expenses
                        </Text>
                        <Modal
                            buttonLabel="Run Payroll"
                            title="Run Payroll"
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
                            <RunPayroll />
                        </Modal>
                    </Flex>
                    <TableContainer>
                        <Table variant={"simple"}>
                            <Thead>
                                <Tr>
                                    <Th>Flushed At</Th>
                                    <Th># of employees</Th>
                                    <Th>Total</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {expenses.map((expense) => (
                                    <Tr key={expense.id}>
                                        <Td>{expense.created_at}</Td>
                                        <Td>{expense.numOfEmployees}</Td>
                                        <Td>{expense.total}</Td>
                                    </Tr>
                                ))}
                                {expenses.length === 0 && (
                                    <Tr>
                                        <Th colSpan={6}>No expenses found.</Th>
                                    </Tr>
                                )}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Stack>
            </Flex>
        </MainLayout>
    );
};

export default ShowExpenses;
