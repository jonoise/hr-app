import { Button, Stack, Text } from "@chakra-ui/react";
import { router } from "@inertiajs/react";
import React, { FC } from "react";

type Props = {
    onClose?: () => void;
};

export const RunPayroll: FC<Props> = (props) => {
    const createExpense = () => {
        router.post("/expenses");
        props.onClose && props.onClose();
    };

    return (
        <Stack>
            <Text>
                It will run payroll for all employees. Are you sure you want to
                run payroll?
            </Text>
            <Stack direction={"row"} spacing={4}>
                <Button
                    colorScheme="red"
                    onClick={() => {
                        props.onClose && props.onClose();
                    }}
                >
                    Cancel
                </Button>
                <Button colorScheme="blue" onClick={createExpense}>
                    Run Payroll
                </Button>
            </Stack>
        </Stack>
    );
};
