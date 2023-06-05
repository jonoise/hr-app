<?php

namespace Lifespikes\Expenses\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Lifespikes\Employees\Models\Employee;
use Lifespikes\Expenses\Models\Expense;
use Redirect;

class ExpenseController extends Controller
{
    public function index()
    {
        $expenses = Expense::orderBy('created_at', 'desc')->get();
        return Inertia::render('Expenses/Show', ['expenses' => $expenses]);
    }

    public function store(Request $request)
    {
        $emps = Employee::with('pay')->get();
        $numOfEmployees = $emps->count();
        $total = 0;

        foreach ($emps as $emp) {
            if ($emp->pay->units > 0) {
                $total += $emp->pay->salary * $emp->pay->units;
            } else {
                $total += $emp->pay->salary;
            }
        }

        $expense = Expense::create([
            'total' => $total,
            'numOfEmployees' => $numOfEmployees,
        ]);


        return Redirect::back();
    }

    public function show(Expense $expense)
    {
        return $expense;
    }

    public function update(Request $request, Expense $expense)
    {


        $expense->update($request->all());

        return $expense;
    }

    public function destroy(Expense $expense)
    {
        $expense->delete();

        return response()->json();
    }
}
