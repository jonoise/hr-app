<?php

namespace Lifespikes\Employees\Cron;

use Lifespikes\Employees\Models\Employee;

class EmployeeCron {

    public function __construct()
    {
        //
    }



    public function searchForEmployees()
    {
        //search for employees that have not been reviewed in the last year
        // and notify HR managers

        $emps = Employee::where('last_review', '<', now()->subYear())->get();

        foreach ($emps as $emp) {
            $emp->createPendingReview();
        }

    }
}
