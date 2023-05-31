import { ReactNode } from "react";
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useUserStore } from "../../stores/user-store";
import { router } from "@inertiajs/react";

const Links = [{ name: "Dashboard", href: "/dashboard" }];

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const userStore = useUserStore((s) => s);

    return (
        <>
            <Box bg={"blackAlpha.50"} borderBottom={"1px solid #ddd"} px={4}>
                <Flex
                    h={16}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <IconButton
                        size={"md"}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={"Open Menu"}
                        display={{ md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={"center"}>
                        <Box>HR APP</Box>
                        {userStore.user?.name && (
                            <HStack
                                as={"nav"}
                                spacing={4}
                                display={{ base: "none", md: "flex" }}
                            >
                                {Links.map((link) => (
                                    <Link
                                        key={link.name}
                                        px={2}
                                        py={1}
                                        rounded={"md"}
                                        _hover={{
                                            textDecoration: "none",
                                            bg: useColorModeValue(
                                                "gray.200",
                                                "gray.700"
                                            ),
                                        }}
                                        href={link.href}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </HStack>
                        )}
                    </HStack>
                    <Flex alignItems={"center"}>
                        {userStore.user?.name && (
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={"full"}
                                    variant={"link"}
                                    cursor={"pointer"}
                                    minW={0}
                                >
                                    <Avatar
                                        size={"sm"}
                                        src={userStore.user?.image}
                                    />
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>
                                        <Link href="/dashboard">Dashboard</Link>
                                    </MenuItem>
                                    <MenuItem>Add Employee</MenuItem>
                                    <MenuDivider />
                                    <MenuItem
                                        onClick={() => {
                                            userStore.setUser(undefined);
                                            router.visit("/", {
                                                method: "get",
                                            });
                                        }}
                                    >
                                        Logout
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        )}
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: "none" }}>
                        <Stack as={"nav"} spacing={4}>
                            {Links.map((link) => (
                                <Link
                                    key={link.name}
                                    px={2}
                                    py={1}
                                    rounded={"md"}
                                    _hover={{
                                        textDecoration: "none",
                                        bg: useColorModeValue(
                                            "gray.200",
                                            "gray.700"
                                        ),
                                    }}
                                    href={link.href}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}
