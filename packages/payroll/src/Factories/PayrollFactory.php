<?php

namespace Lifespikes\Payroll\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;
use Lifespikes\Payroll\Models\Payroll;

class PayrollFactory extends Factory
{
    protected $model = Payroll::class;

    public function definition(): array
    {
        return [
            'frequency' => 'weekly',
            'flush_at' => fake()->date(),
        ];
    }
}
