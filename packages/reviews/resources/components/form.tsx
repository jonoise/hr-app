import { Button, Input, Select, Stack, Text, Textarea } from "@chakra-ui/react";
import React, { FC } from "react";
import { ReviewI } from "../../types/review";
import { router } from "@inertiajs/react";

type Props = {
    review?: ReviewI;
    onClose?: () => void;
};

const defaultReview: ReviewI = {
    score: 1,
    comment: "",
};

export const ReviewForm: FC<Props> = (props) => {
    const [review, setReview] = React.useState<ReviewI>(
        props.review || defaultReview
    );

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.review
            ? router.put(`/reviews/${review.id}`, review as any)
            : router.post(`/reviews`, review as any);
        props.onClose && props.onClose();
    };

    return (
        <form onSubmit={onSubmit}>
            <Stack pb={4} fontSize={"xs"}>
                <Text>Comment</Text>
                <Textarea
                    value={review.comment}
                    name="comment"
                    placeholder="John Doe"
                    onChange={(e) =>
                        setReview({ ...review, comment: e.target.value })
                    }
                />
                <Text>Score</Text>
                <Select
                    name="score"
                    value={review.score}
                    onChange={(e) =>
                        setReview({ ...review, score: Number(e.target.value) })
                    }
                >
                    {scores.map((score) => (
                        <option key={score} value={score}>
                            {score}
                        </option>
                    ))}
                </Select>
                <Button type="submit">
                    {props.review ? "Update Review" : "Create Review"}
                </Button>
            </Stack>
        </form>
    );
};

const scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
