import React, { FC } from "react";
import MainLayout from "../../components/Shared/main-layout";
import { Flex } from "@chakra-ui/react";

const Details: FC<{ employee: EmployeeI }> = (props) => {
    const { employee } = props;

    console.log(employee);

    return (
        <MainLayout>
            <Flex minH="2xl">
                <h1>{employee.name}</h1>
            </Flex>
        </MainLayout>
    );
};

export default Details;
