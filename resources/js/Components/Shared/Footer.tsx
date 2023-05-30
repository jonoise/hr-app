import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from "@chakra-ui/react";
import { ReactNode } from "react";

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            bg={"blackAlpha.100"}
            rounded={"full"}
            w={8}
            h={8}
            cursor={"pointer"}
            as={"a"}
            href={href}
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            transition={"background 0.3s ease"}
            target="_blank"
            _hover={{
                bg: "blackAlpha.200",
            }}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function Footer() {
    return (
        <Box bg={"gray.50"} color={"gray.900"}>
            <Container
                as={Stack}
                maxW={"6xl"}
                py={4}
                direction={{ base: "column", md: "row" }}
                spacing={4}
                justify={{ base: "center", md: "space-between" }}
                align={{ base: "center", md: "center" }}
            >
                <Text>© HR App written in React + Laravel</Text>
                <Stack direction={"row"} spacing={6}>
                    <SocialButton
                        label={"Laravel"}
                        href={"https://laravel.com"}
                    >
                        🚀
                    </SocialButton>
                    <SocialButton label={"React"} href={"https://react.dev"}>
                        👑
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    );
}
