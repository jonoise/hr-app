<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Lifespikes\Employees\Cron\EmployeeCron;
use Lifespikes\Employees\Models\Employee;
use Lifespikes\Expenses\Models\Expense;
use Lifespikes\Reports\Models\Report;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     */
    protected function schedule(Schedule $schedule): void
    {
        $schedule->call(function () {
            $emps = Employee::where('last_review', '<', now()->subYear())->get();
            foreach ($emps as $emp) {
                $emp->createPendingReview();
            }
        })->everyMinute();

        $schedule->call(function () {
            $start = now()->subMonth();
            $end = now();
            $total = Expense::whereBetween('created_at', [$start, $end])->get()->sum('amount');
            Report::create([
                'start_period' => $start,
                'end_period' => $end,
                'type' => 'monthly',
                'total' => $total,
            ]);
        })->everyMinute();

        $schedule->call(function () {})->quarterly();
        $schedule->call(function () {})->yearly();
    }

    /**
     * Register the commands for the application.
     */
    protected function commands(): void
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
