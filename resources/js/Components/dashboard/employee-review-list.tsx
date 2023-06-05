import { ReviewI } from "@/packages/reviews/types/review";
import { Stack, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import useSWR from "swr";

type Props = {
    employeeId: number;
};

export const EmployeeReviewList: FC<Props> = (props) => {
    const { data: reviews } = useSWR<ReviewI[]>(
        `/employees/${props.employeeId}/reviews`
    );

    console.log(reviews);

    return (
        <Stack>
            {reviews?.map((review) => (
                <Stack key={review.id} p={2} bg={"gray.100"} rounded={"md"}>
                    <Text>Rating: {review.score}</Text>
                    <Text>Comment: {review.comment}</Text>
                </Stack>
            ))}
        </Stack>
    );
};
