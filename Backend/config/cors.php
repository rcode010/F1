<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    */

    'paths' => ['api/*'],            // Apply only to API routes
    'allowed_methods' => ['*'],      // Allow GET, POST, etc
    'allowed_origins' => ['http://localhost:5173'], // React dev server
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],      // Allow all headers
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => false,

];
