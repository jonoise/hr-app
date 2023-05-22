<?php

namespace Lifespikes\Reviews\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Lifespikes\Employees\Models\Employee;
use Lifespikes\Reviews\Models\Review;

class ReviewController extends Controller
{
    public function index()
    {
        return Employee::all();
    }

    public function store(Request $request)
    {
    }

    public function show($id)
    {
    }

    public function update(Request $request, $id)
    {
    }

    public function destroy($id)
    {
    }
}
