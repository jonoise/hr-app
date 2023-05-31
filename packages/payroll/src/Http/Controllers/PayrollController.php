<?php

namespace Lifespikes\Payroll\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Lifespikes\Payroll\Models\Payroll;

class PayrollController extends Controller
{
    public function index()
    {
        return Payroll::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'frequency' => ['required'],
            'flush_at' => ['required'],
        ]);

        return Payroll::create($request->validated());
    }

    public function show(Payroll $payroll)
    {
        return $payroll;
    }

    public function update(Request $request, Payroll $payroll)
    {
        $request->validate([
            'frequency' => ['required'],
            'flush_at' => ['required'],
        ]);

        $payroll->update($request->validated());

        return $payroll;
    }

    public function destroy(Payroll $payroll)
    {
        $payroll->delete();

        return response()->json();
    }
}
