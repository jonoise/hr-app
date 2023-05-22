<?php

namespace Lifespikes\Reviews\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Lifespikes\Reviews\Models\Review;

class ReviewFactory extends Factory
{
    protected $model = Review::class;
    public function definition(): array
    {
        return [
            'employee_id' => 1
        ];
    }
}
