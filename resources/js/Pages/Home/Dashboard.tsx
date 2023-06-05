import { Flex, Stack, Text } from "@chakra-ui/react";
import MainLayout from "../../components/Shared/main-layout";
import { DashboardSidebar } from "../../components/Shared/dashboard-sidebar";
import { FC } from "react";

const Dashboard: FC<{ employees: EmployeeI[] }> = (props) => {
    return (
        <MainLayout>
            <Flex position={"relative"}>
                <DashboardSidebar />
                <Stack w={"100%"} bg={"gray.100"} p={4}>
                    <Text fontSize={"xl"} fontWeight={"bold"}>
                        Dashboard
                    </Text>
                    <Text>Welcome to you HR Dashboard.</Text>
                </Stack>
            </Flex>
        </MainLayout>
    );
};

export default Dashboard;
