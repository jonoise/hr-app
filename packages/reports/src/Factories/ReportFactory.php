<?php

namespace Lifespikes\Reports\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;
use Lifespikes\Reports\Models\Report;

class ReportFactory extends Factory
{
    protected $model = Report::class;

    public function definition(): array
    {
        return [
            'start_period' => Carbon::now(),
            'end_period' => Carbon::now(),
            'type' => 'quaterly',
            'total' => fake()->randomNumber(),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }
}
