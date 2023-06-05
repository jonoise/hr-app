import React, { FC } from "react";
import {
    Box,
    Flex,
    Stack,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tooltip,
    Tr,
} from "@chakra-ui/react";
import { ReviewI } from "../../types/review";
import { Modal } from "@/resources/js/components/Shared/modal";
import { BsFileEarmarkPerson, BsX } from "react-icons/bs";
import { ReviewForm } from "./form";
import { RxCross1 } from "react-icons/rx";
import DeleteReview from "./delete";

type Props = {
    review: ReviewI;
};

export const ReviewRow: FC<Props> = (props) => {
    const { review } = props;
    return (
        <Tr key={review.id}>
            <Td>{review.employee?.name}</Td>
            <Td>{review.employee?.email}</Td>
            <Td>{review.score}</Td>
            <Td
                textOverflow={"ellipsis"}
                whiteSpace={"nowrap"}
                overflow={"hidden"}
                maxW={"200px"}
            >
                {review.comment}
            </Td>
            <Td>
                <Stack direction={"row"}>
                    <Modal
                        title={`Review for ${review.employee?.name}`}
                        buttonLabel={
                            <Tooltip label={"Edit Review"} placement="top">
                                <Box cursor={"pointer"} p={2} mr="2">
                                    <BsFileEarmarkPerson />
                                </Box>
                            </Tooltip>
                        }
                    >
                        <ReviewForm review={review} />
                    </Modal>
                    <Modal
                        title={`Are you sure you want to delete this review?`}
                        buttonLabel={
                            <Tooltip label={"Delete Review"} placement="top">
                                <Box cursor={"pointer"} p={2} mr="2">
                                    <RxCross1 />
                                </Box>
                            </Tooltip>
                        }
                    >
                        <DeleteReview review={review} />
                    </Modal>
                </Stack>
            </Td>
        </Tr>
    );
};
