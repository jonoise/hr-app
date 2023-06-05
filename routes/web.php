<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Lifespikes\Employees\Models\Employee;
use Lifespikes\Employees\Http\Controllers\EmployeeController;
use Lifespikes\Payroll\Http\Controllers\PayrollController;
use Lifespikes\Reviews\Http\Controllers\ReviewController;
use Lifespikes\Expenses\Http\Controllers\ExpenseController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/



Route::get('/', function () { return Inertia::render('Home/Index'); });

Route::get('/dashboard', function () {
    $employees = Employee::orderBy('created_at', 'DESC')->get();
    return Inertia::render('Home/Dashboard', ['employees' => $employees]);
});

Route::get('/employees/{id}/reviews', [EmployeeController::class, 'showReviews'])->name('employees.reviews');

Route::resources([
    '/employees' => EmployeeController::class,
]);

Route::resources([
    '/reviews' => ReviewController::class,
]);

Route::resources([
    '/expenses' => ExpenseController::class,
]);


Route::resources([
    '/payrolls' => PayrollController::class,
]);

