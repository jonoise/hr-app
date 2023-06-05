import React, { FC } from "react";
import { ReviewI } from "../../types/review";
import { Button, Flex, Stack } from "@chakra-ui/react";
import { router } from "@inertiajs/react";

type Props = {
    review: ReviewI;
    onClose?: () => void;
};

const DeleteReview: FC<Props> = (props) => {
    const { review } = props;

    const deleteReview = () => {
        router.delete(`/reviews/${review.id}`);
    };

    return (
        <Stack gap={4} pb={4}>
            <p>Delete review for {props.review.employee?.name}.</p>
            <Flex gap={4}>
                <Button onClick={deleteReview} colorScheme="red">
                    Delete review
                </Button>
                <Button
                    onClick={() => props.onClose && props.onClose()}
                    colorScheme="blue"
                >
                    Cancel
                </Button>
            </Flex>
        </Stack>
    );
};

export default DeleteReview;
