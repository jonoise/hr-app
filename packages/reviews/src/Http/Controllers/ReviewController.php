<?php

namespace Lifespikes\Reviews\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Lifespikes\Reviews\Models\Review;
use Redirect;

class ReviewController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Reviews/Index', [
            'reviews' => Review::with('employee')->get(),
        ]);
    }

    public function store(Request $request)
    {
        Review::create($request->all());
        return Redirect::back();

    }

    public function show($id)
    {
        return Review::find($id);
    }

    public function update(Request $request, $id)
    {
        $review = Review::find($id);
        $review->score = $request->score;
        $review->comment = $request->comment;
        $review->save();

        return Redirect::back();
    }

    public function destroy($id)
    {
        Review::destroy($id);
        return Redirect::back();
    }
}
