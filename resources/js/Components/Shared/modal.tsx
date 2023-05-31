import {
    Modal as ChakraModal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    ButtonProps,
    BoxProps,
    Box,
} from "@chakra-ui/react";
import { FC } from "react";

type Props = {
    title: string;
    buttonLabel: string | React.ReactNode;
    buttonProps?: BoxProps;
    children: React.ReactNode;
};

export const Modal: FC<Props> = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box cursor={"pointer"} {...props.buttonProps} onClick={onOpen}>
                {props.buttonLabel}
            </Box>

            <ChakraModal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{props.title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>{props.children}</ModalBody>
                </ModalContent>
            </ChakraModal>
        </>
    );
};
