<?php

namespace Lifespikes\Reviews;

use Illuminate\Support\ServiceProvider;

class ReviewsServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->mergeConfigFrom(__DIR__ . '/../config/reviews.php', 'reviews');
        $this->loadRoutesFrom(__DIR__ . '/../routes/reviews.php');
        $this->loadMigrationsFrom(__DIR__ . '/../migrations');
    }

    public function boot(): void
    {
        //
    }
}
