import { Stack, Text } from "@chakra-ui/react";
import { Link } from "@inertiajs/react";
import React from "react";

export const DashboardSidebar = () => {
    return (
        <Stack
            position={"sticky"}
            top={0}
            left={0}
            w={"300px"}
            h={"100vh"}
            bg={"gray.100"}
            p={4}
            spacing={4}
            borderRight={"1px solid #ddd"}
        >
            {links.map((link) => (
                <Link href={link.href} key={link.name}>
                    <Text>{link.name}</Text>
                </Link>
            ))}
        </Stack>
    );
};

const links = [
    {
        name: "Employees",
        href: "/dashboard",
    },
    {
        name: "Expenses",
        href: "/dashboard/expenses",
    },
    {
        name: "Reviews",
        href: "/dashboard/reviews",
    },
];
