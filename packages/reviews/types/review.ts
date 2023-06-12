export interface ReviewI {
    id?: number;
    employee_id?: number;
    comment: string;
    score: number;
    pending?: boolean;
    createdAt?: string;
    updatedAt?: string;
    employee?: EmployeeI;
}
