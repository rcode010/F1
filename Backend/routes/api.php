<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DriverController;

Route::get('/drivers', [DriverController::class, 'getDrivers']);
