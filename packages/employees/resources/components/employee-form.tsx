import { Button, Flex, Input, Select, Stack, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import Inertia, { router } from "@inertiajs/react";

type Props = {
    employee?: EmployeeI;
    onClose?: () => void;
};

const defaultEmployee: EmployeeI = {
    name: "",
    phone: "",
    email: "",
    probatory: true,
    hired: false,
};

const defaultPay = {
    salary: 0,
    units: 0,
    frequency: "weekly",
    type: "flat",
};

export const EmployeeForm: FC<Props> = (props) => {
    const [employee, setEmployee] = React.useState<EmployeeI>(
        props.employee || defaultEmployee
    );

    console.log(props);

    const [pay, setPay] = React.useState(defaultPay);

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if (props?.employee) {
                    router.put(`/employees/${props.employee.id}`, {
                        employee,
                    } as any);
                } else {
                    router.post("/employees", { employee, pay } as any);
                }
                props.onClose && props.onClose();
            }}
        >
            <Stack pb={4} fontSize={"xs"}>
                <Text>Name</Text>
                <Input
                    name="name"
                    value={employee.name}
                    onChange={(e) =>
                        setEmployee({ ...employee, name: e.target.value })
                    }
                    placeholder="John Doe"
                />
                <Text>Phone</Text>
                <Input
                    name="phone"
                    value={employee.phone}
                    onChange={(e) =>
                        setEmployee({ ...employee, phone: e.target.value })
                    }
                    placeholder="1 800 555 5555"
                />
                <Text>Email</Text>
                <Input
                    name="email"
                    value={employee.email}
                    onChange={(e) =>
                        setEmployee({ ...employee, email: e.target.value })
                    }
                    placeholder="johndoe@gmail.com"
                />
                {!props?.employee && (
                    <Stack>
                        <Text py={2} fontSize={"lg"}>
                            Payment information
                        </Text>
                        <Text>Salary</Text>
                        <Input
                            name="salary"
                            value={pay.salary}
                            onChange={(e) =>
                                setPay({
                                    ...pay,
                                    salary: Number(e.target.value),
                                })
                            }
                            placeholder="Salary"
                        />
                        <Text>Units</Text>
                        <Input
                            name="units"
                            value={pay.units}
                            onChange={(e) =>
                                setPay({
                                    ...pay,
                                    units: Number(e.target.value),
                                })
                            }
                            placeholder="Units"
                        />
                        <Flex w={"full"}>
                            <Stack flex={1} mr={2}>
                                <Text>Pay Type</Text>
                                <Select
                                    name="type"
                                    value={pay.type}
                                    onChange={(e) =>
                                        setPay({ ...pay, type: e.target.value })
                                    }
                                >
                                    <option value="flat">Flat</option>
                                    <option value="hourly">Hourly</option>
                                    <option value="piece">Piecework</option>
                                </Select>
                            </Stack>

                            <Stack flex={1}>
                                <Text>Frequency</Text>
                                <Select
                                    name="frequency"
                                    value={pay.frequency}
                                    onChange={(e) =>
                                        setPay({
                                            ...pay,
                                            frequency: e.target.value,
                                        })
                                    }
                                >
                                    <option value="weekly">Weekly</option>
                                    <option value="biweekly">Biweekly</option>
                                    <option value="monthly">Monthly</option>
                                </Select>
                            </Stack>
                        </Flex>
                    </Stack>
                )}
                <Button type="submit">
                    {props.employee?.id ? "Save" : "Add"}
                </Button>
            </Stack>
        </form>
    );
};
