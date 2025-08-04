<?php

use Illuminate\Support\Facades\Route;

// This should serve your main Vue app entry point
Route::get('/{any}', function () {
    return view('welcome'); // use your Vue blade file here (e.g., resources/views/app.blade.php)
})->where('any', '.*');
