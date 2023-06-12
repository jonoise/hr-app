<?php

namespace Lifespikes\Reports;

use Illuminate\Support\ServiceProvider;

class ReportsServiceProvider extends ServiceProvider
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
