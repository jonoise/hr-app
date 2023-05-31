<?php

namespace Lifespikes\Pay;

use Illuminate\Support\ServiceProvider;

class PayServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->loadMigrationsFrom(__DIR__ . '/../migrations');
    }

    public function boot(): void
    {
        //
    }
}
