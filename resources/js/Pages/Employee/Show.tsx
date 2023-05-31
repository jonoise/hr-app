import EmployeeRow from "@/packages/employees/resources/components/EmployeeRow";
import { FC, useState } from "react";
import MainLayout from "../../components/Shared/main-layout";

const Show: FC<{ employees: EmployeeI[] }> = ({ employees }) => {
    const [emps, setEmployees] = useState(employees);

    const saveEmployees = () => {
        console.log(emps);
    };

    return (
        <MainLayout>
            {emps.map((emp, index) => (
                <EmployeeRow
                    index={index}
                    setEmployees={setEmployees}
                    employee={emp}
                />
            ))}
            <button onClick={saveEmployees}>guardar mis empleados</button>
        </MainLayout>
    );
};

export default Show;
