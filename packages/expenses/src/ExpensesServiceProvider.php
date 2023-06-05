<?php

namespace Lifespikes\Expenses;

use Illuminate\Support\ServiceProvider;

class ExpensesServiceProvider extends ServiceProvider
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
