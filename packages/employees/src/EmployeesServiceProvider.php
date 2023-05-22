<?php

namespace Lifespikes\Employees;

use Illuminate\Support\ServiceProvider;

class EmployeesServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->mergeConfigFrom(__DIR__ . '/../config/employees.php', 'employees');
        $this->loadRoutesFrom(__DIR__ . '/../routes/employees.php');
        $this->loadMigrationsFrom(__DIR__ . '/../migrations');
    }

    public function boot(): void
    {
        //
    }
}
