import { Box, Input } from "@chakra-ui/react";
import React, { FC, useState } from "react";

type Props = {
    employee: EmployeeI;
    index: number;
    setEmployees: React.Dispatch<React.SetStateAction<EmployeeI[]>>;
};

const EmployeeRow: FC<Props> = (props) => {
    const { employee, index, setEmployees } = props;

    const [name, setName] = useState(employee.name);

    const [editing, setEditing] = useState(false);

    const saveEmployee = (e: any) => {
        e.preventDefault();
        setEditing(false);
        setEmployees((emps) => {
            let newemps = [...emps];
            let emp = newemps[index];
            emp.name = name;
            newemps[index] = emp;
            return newemps;
        });
    };

    return (
        <Box w="100%" bg={"red"} color={"white"}>
            {editing ? (
                <form onSubmit={saveEmployee}>
                    <Input
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                </form>
            ) : (
                <p onClick={() => setEditing(true)}>{employee.name}</p>
            )}
        </Box>
    );
};

export default EmployeeRow;
