<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Lifespikes\Employees\Models\Employee;
use Lifespikes\Pay\Models\Pay;
use Lifespikes\Payroll\Models\Payroll;
use Lifespikes\Reviews\Models\Review;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();


        Payroll::factory()->count(1)->create();

        Employee::factory()->count(10)->create()->each(function ($employee) {
            $employee->payroll_id = 1;
            $employee->hired = false;
            $employee->pay()->save(Pay::factory()->make());
            $employee->save();
        });

        Review::factory()->count(20)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
