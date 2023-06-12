<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Lifespikes\Reports\Models\Report;

class ReportController extends Controller
{
    public function index()
    {
        return Report::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'start_period' => ['required', 'date'],
            'end_period' => ['required', 'date'],
            'type' => ['required'],
            'total' => ['required', 'integer'],
        ]);

        return Report::create($request->validated());
    }

    public function show(Report $report)
    {
        return $report;
    }

    public function update(Request $request, Report $report)
    {
        $request->validate([
            'start_period' => ['required', 'date'],
            'end_period' => ['required', 'date'],
            'type' => ['required'],
            'total' => ['required', 'integer'],
        ]);

        $report->update($request->validated());

        return $report;
    }

    public function destroy(Report $report)
    {
        $report->delete();

        return response()->json();
    }
}
