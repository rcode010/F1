<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class OpenF1Service
{
    protected $baseUrl;

    public function __construct()
    {
        $this->baseUrl = config('app.openf1_api_url', 'https://api.openf1.org/v1/');
    }

    /**
     * General method to fetch any endpoint after /v1/
     *
     * @param string $path    Example: 'drivers', 'laps', 'sessions'
     * @param array  $params  Query parameters
     * @return array
     * @throws \Exception
     */
    public function fetch(string $path, array $params = []): array
    {
        $url = rtrim($this->baseUrl, '/') . '/' . ltrim($path, '/');
        $response = Http::get($url, $params);

        if (!$response->successful()) {
            throw new \Exception("Failed to fetch $path: " . $response->body());
        }

        return $response->json();
    }
}
