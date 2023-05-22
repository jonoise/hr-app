<?php

use \Illuminate\Support\Facades\Route;
use \Lifespikes\Reviews\Http\Controllers\ReviewController;

Route::resource('reviews', ReviewController::class);
