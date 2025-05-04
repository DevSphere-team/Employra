<?php

use App\Http\Controllers\EmployeController;
use App\Http\Controllers\StorageController;
use App\Http\Controllers\ClientController;
use App\Models\Client;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::resource('employes', EmployeController::class);
    Route::resource('client', ClientController::class);
    Route::resource('storages', StorageController::class);
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
