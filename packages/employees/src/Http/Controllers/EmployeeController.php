<?php

namespace Lifespikes\Employees\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Lifespikes\Employees\Models\Employee;
use Lifespikes\Pay\Models\Pay;
use Lifespikes\Reviews\Models\Review;
use Redirect;

class EmployeeController extends Controller
{
    public function index()
    {
    return Inertia::render('Employees/Show', [
        'employees' => Employee::orderBy('created_at', 'DESC')->get(),
    ]);
    }

    public function store(Request $request)
    {

        $employee = new Employee($request->employee);
        $pay = new Pay($request->pay);
        $employee->save();
        $employee->pay()->save($pay);

        return Redirect::route('employees.index', $employee->id)->with('success', 'Employee created.');

    }

    public function show(Employee $employee)
    {
        return Inertia::render('Employees/Details', [
        'employee' => $employee->load('reviews'),
    ]);
    }

    public function showReviews($id)
    {
        $employee = Employee::find($id);
        $reviews =  Review::where('employee_id', $employee->id)->get();
        return response()->json($reviews, 200);
    }



    public function update(Request $request, $id)
    {

    }

    public function destroy($id)
    {
    }
}
