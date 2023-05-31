import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Image,
    VStack,
} from "@chakra-ui/react";
import MainLayout from "../../components/Shared/main-layout";
import { useState } from "react";
import { useUserStore } from "../../stores/user-store";
import { Link, router } from "@inertiajs/react";

export default function SimpleCard() {
    const userStore = useUserStore((s) => s);
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    return (
        <MainLayout>
            <Flex
                minH={"100vh"}
                align={"center"}
                justify={"center"}
                bg={useColorModeValue("gray.50", "gray.800")}
            >
                {userStore.user ? (
                    <VStack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                        <Image
                            src={userStore.user.image}
                            w={120}
                            h={120}
                            rounded={"full"}
                        />
                        <Stack align={"center"}>
                            <Heading fontSize={"4xl"} textAlign={"center"}>
                                {userStore.user.name}
                            </Heading>
                            <Text fontSize={"xs"} color={"gray.600"}>
                                HR Manager
                            </Text>
                            <Text fontSize={"xs"} color={"gray.600"}>
                                {userStore.user.email}
                            </Text>
                            <Link href={"/dashboard"}>
                                <Button border={"1px solid #ddd"}>
                                    Go to Dashboard
                                </Button>
                            </Link>
                        </Stack>
                    </VStack>
                ) : (
                    <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                        <Stack align={"center"}>
                            <Heading fontSize={"4xl"} textAlign={"center"}>
                                Sistema de <br /> Recursos Humanos
                            </Heading>
                            <Text fontSize={"xs"} color={"gray.600"}>
                                By LifeSpikes
                            </Text>
                        </Stack>
                        <Box
                            rounded={"lg"}
                            bg={useColorModeValue("white", "gray.700")}
                            boxShadow={"lg"}
                            p={8}
                        >
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    userStore.setUser(userData);
                                    router.visit("/dashboard");
                                }}
                            >
                                <Stack spacing={4}>
                                    <FormControl id="email">
                                        <FormLabel>Email address</FormLabel>
                                        <Input
                                            placeholder="panic@thedis.co"
                                            type="email"
                                            onChange={(e) =>
                                                setUserData({
                                                    ...userData,
                                                    email: e.target.value,
                                                })
                                            }
                                        />
                                    </FormControl>
                                    <FormControl id="password">
                                        <FormLabel>Password</FormLabel>
                                        <Input
                                            placeholder="secret"
                                            type="password"
                                            onChange={(e) =>
                                                setUserData({
                                                    ...userData,
                                                    password: e.target.value,
                                                })
                                            }
                                        />
                                    </FormControl>
                                    <Stack spacing={10}>
                                        <Button
                                            type="submit"
                                            bg={"blue.400"}
                                            color={"white"}
                                            _hover={{
                                                bg: "blue.500",
                                            }}
                                        >
                                            Entrar
                                        </Button>
                                    </Stack>
                                </Stack>
                            </form>
                        </Box>
                    </Stack>
                )}
            </Flex>
        </MainLayout>
    );
}
