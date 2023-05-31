<?php

namespace Lifespikes\Pay\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;
use Lifespikes\Pay\Models\Pay;

class PayFactory extends Factory
{
    protected $model = Pay::class;

    public function definition(): array
    {
        return [
            'salary' => fake()->numberBetween(400, 1000),
            'units' => fake()->numberBetween(6, 8),
            'type' => 'flat',
        ];
    }
}
