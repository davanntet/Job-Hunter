<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\EmployeeController;

use App\Http\Controllers\API\CompanyController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// User
Route::get('user', [UserController::class,'index']);
Route::get('user/{user}', [UserController::class,'show']);
Route::post('user', [UserController::class,'store']);
Route::put('user/{user}', [UserController::class,'update']);
Route::delete('user/{user}', [UserController::class,'delete']);

// Employee
Route::get('employee', [EmployeeController::class,'index']);
Route::get('employee/{employee}', [EmployeeController::class,'show']);
Route::post('employee', [EmployeeController::class,'store']);
Route::put('employee/{employee}', [EmployeeController::class,'update']);
Route::delete('employee/{employee}', [UserController::class,'delete']);

// Employer
Route::get('employer', [EmployerController::class,'index']);
Route::get('employer/{employer}', [EmployerController::class,'show']);
Route::post('employer', [EmployerController::class,'store']);
Route::put('employer/{employer}', [EmployerController::class,'update']);
Route::delete('employer/{employer}', [EmployerController::class,'delete']);

// Company
Route::get('company', [CompanyController::class,'index']);
Route::get('company/{company}', [CompanyController::class,'show']);
Route::post('company', [CompanyController::class,'store']);
Route::put('company/{company}', [CompanyController::class,'update']);
Route::delete('company/{company}', [CompanyController::class,'delete']);