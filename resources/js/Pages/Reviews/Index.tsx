import React, { FC } from "react";
import MainLayout from "../../components/Shared/main-layout";
import { DashboardSidebar } from "../../components/Shared/dashboard-sidebar";
import {
    Flex,
    Stack,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import { Modal } from "../../components/Shared/modal";
import { ReviewI } from "@/packages/reviews/types/review";
import { ReviewRow } from "@/packages/reviews/resources/components/row";

type Props = {
    reviews: ReviewI[];
};

const ReviewsListPage: FC<Props> = (props) => {
    const { reviews } = props;
    return (
        <MainLayout>
            <Flex position={"relative"}>
                <DashboardSidebar />
                <Stack w={"100%"} bg={"gray.100"} p={4}>
                    <Flex
                        justify={"space-between"}
                        align={"center"}
                        borderBottom={"1px solid #ddd"}
                        pb={10}
                    >
                        <Text fontSize={"xl"} fontWeight={"bold"}>
                            Reviews
                        </Text>
                    </Flex>
                    <TableContainer>
                        <Table variant={"simple"}>
                            <Thead>
                                <Tr>
                                    <Th>Employee</Th>
                                    <Th>Email</Th>
                                    <Th>Score</Th>
                                    <Th>Comment</Th>
                                    <Th>Actions</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {reviews.map((review) => (
                                    <ReviewRow
                                        key={review.id}
                                        review={review}
                                    />
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Stack>
            </Flex>
        </MainLayout>
    );
};

export default ReviewsListPage;
