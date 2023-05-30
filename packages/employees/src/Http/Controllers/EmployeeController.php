<?php

namespace Lifespikes\Employees\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Lifespikes\Employees\Models\Employee;

class EmployeeController extends Controller
{
    public function index()
    {
    return Inertia::render('Employee/Test', [
        'employees' => Employee::all(),
    ]);
    }

    public function store(Request $request)
    {
    }

    public function show(Employee $employee)
    {
        return Inertia::render('Employee/Details', [
        'employee' => $employee,
    ]);
    }

    public function update(Request $request, $id)
    {
    }

    public function destroy($id)
    {
    }
}
