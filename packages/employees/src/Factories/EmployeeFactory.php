<?php

namespace Lifespikes\Employees\Factories;


use Illuminate\Database\Eloquent\Factories\Factory;
use Lifespikes\Employees\Models\Employee;

class EmployeeFactory extends Factory
{
    protected $model = Employee::class;

    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'phone' => fake()->phoneNumber(),
            'email' => fake()->email(),
            'probatory' => true,
            'hired' => false,
        ];
    }
}
