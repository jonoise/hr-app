<?php

namespace Lifespikes\Expenses\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;
use Lifespikes\Expenses\Models\Expense;

class ExpenseFactory extends Factory
{
    protected $model = Expense::class;

    public function definition(): array
    {
        return [
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
            'numOfEmployees' => fake()->randomNumber(),
            'total' => fake()->randomNumber(),
        ];
    }
}
