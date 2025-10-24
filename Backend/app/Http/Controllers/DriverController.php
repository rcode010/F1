<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DriverController extends Controller
{
    protected $openF1Service;

    public function __construct()
    {
        $this->openF1Service = new \App\Services\OpenF1Service(); // Make sure you have this service
    }

    public function getDrivers()
    {
        try {
            $drivers = $this->openF1Service->fetch('drivers'); // Fetch from external API
            $drivers = array_slice($drivers, 0, 100); // Always limit to 100
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return response()->json($drivers);
    }
}
