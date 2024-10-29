<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RabbitMQController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/check-rabbitmq', [RabbitMQController::class, 'checkConnection']);
