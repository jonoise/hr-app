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
} from "@chakra-ui/react";
import MainLayout from "../../Components/Shared/MainLayout";
import { useUser } from "../../hooks/use-user";
import { useState } from "react";

export default function SimpleCard() {
    const { login } = useUser();
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
                                    bg={"blue.400"}
                                    color={"white"}
                                    _hover={{
                                        bg: "blue.500",
                                    }}
                                    onClick={() => login(userData)}
                                >
                                    Entrar
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </MainLayout>
    );
}
