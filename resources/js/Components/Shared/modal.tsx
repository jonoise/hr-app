import {
    Modal as ChakraModal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    BoxProps,
    Box,
    ModalProps,
} from "@chakra-ui/react";
import React, {
    Children,
    FC,
    JSXElementConstructor,
    ReactElement,
    cloneElement,
    isValidElement,
} from "react";

type Props = {
    title: string;
    buttonLabel: string | React.ReactNode;
    buttonProps?: BoxProps;
    modalProps?: BoxProps & { size: ModalProps["size"] };
    children: ReactElement<any, string | JSXElementConstructor<any>>;
};

export const Modal: FC<Props> = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box cursor={"pointer"} {...props.buttonProps} onClick={onOpen}>
                {props.buttonLabel}
            </Box>

            <ChakraModal
                {...(props.modalProps as any)}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{props.title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {Children.map(props.children, (child) => {
                            if (!isValidElement(child)) return;
                            return cloneElement(child, { onClose } as any);
                        })}
                    </ModalBody>
                </ModalContent>
            </ChakraModal>
        </>
    );
};
