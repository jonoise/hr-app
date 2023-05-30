import React, { FC } from "react";
import MainLayout from "../../Components/Shared/MainLayout";
import { Flex } from "@chakra-ui/react";

const Details: FC<{ employee: EmployeeI }> = (props) => {
    const { employee } = props;

    return (
        <MainLayout>
            <Flex minH="2xl">
                <h1>{employee.name}</h1>
            </Flex>
        </MainLayout>
    );
};

export default Details;
