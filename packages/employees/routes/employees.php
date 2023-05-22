<?php

use Illuminate\Support\Facades\Route;
use \Lifespikes\Employees\Http\Controllers\EmployeeController;

Route::resource('employee', EmployeeController::class);


