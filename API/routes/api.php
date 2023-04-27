<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\EmployeeController;
use App\Http\Controllers\API\EmployerController;
use App\Http\Controllers\API\CompanyController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\FaqController;
use App\Http\Controllers\API\JobCategoryController;
use App\Http\Controllers\API\UserInterestController;
use App\Http\Controllers\API\SkillController;
use App\Http\Controllers\API\UserSkillController;

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
Route::get('user/{id}', [UserController::class,'show']);
Route::post('user', [UserController::class,'store']);
Route::put('user/{id}/update', [UserController::class,'update']);
Route::delete('user/{id}/delete', [UserController::class,'delete']);

// Employee
Route::get('employee', [EmployeeController::class,'index']);
Route::get('employee/{employee}', [EmployeeController::class,'show']);
Route::post('employee', [EmployeeController::class,'store']);
Route::put('employee/{employee}', [EmployeeController::class,'update']);
Route::delete('employee/{employee}', [EmployeeController::class,'delete']);

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

// Category
Route::get('category', [CategoryController::class,'index']);
Route::get('category/{id}', [CategoryController::class,'show']);
Route::post('category', [CategoryController::class,'store']);
Route::put('category/{category}', [CategoryController::class,'update']);
Route::delete('category/{category}', [CategoryController::class,'delete']);

// Job Category
Route::get('job_category', [JobCategoryController::class,'index']);
Route::get('job_category/{id}', [JobCategoryController::class,'show']);
Route::post('job_category', [JobCategoryController::class,'store']);
Route::put('job_category/{id}/update', [JobCategoryController::class,'update']);
Route::delete('job_category/{id}/delete', [JobCategoryController::class,'delete']);

// Following & Follower
Route::get('follow', [FollowController::class,'index']);
Route::get('follow/{follow}', [FollowController::class,'show']);
Route::post('follow', [FollowController::class,'store']);
Route::put('follow/{follow}', [FollowController::class,'update']);
Route::delete('follow/{follow}', [FollowController::class,'delete']);

// User Interest
Route::get('user_interest', [UserInterestController::class,'index']);
Route::get('user_interest/{user_interest}', [UserInterestController::class,'show']);
Route::post('user_interest', [UserInterestController::class,'store']);
Route::put('user_interest/{user_interest}', [UserInterestController::class,'update']);
Route::delete('user_interest/{user_interest}', [UserInterestController::class,'delete']);

// Post
Route::get('post', [PostController::class,'index']);
Route::get('post/{post}', [PostController::class,'show']);
Route::post('post', [PostController::class,'store']);
Route::put('post/{post}', [PostController::class,'update']);
Route::delete('post/{post}', [PostController::class,'delete']);

// Skill
Route::get('skill', [SkillController::class,'index']);
Route::get('skill/{skill}', [SkillController::class,'show']);
Route::post('skill', [SkillController::class,'store']);
Route::put('skill/{skill}', [SkillController::class,'update']);
Route::delete('skill/{skill}', [SkillController::class,'delete']);

// User Skill
Route::get('user_skill', [UserSkillController::class,'index']);
Route::get('user_skill/{user_skill}', [UserSkillController::class,'show']);
Route::post('user_skill', [UserSkillController::class,'store']);
Route::put('user_skill/{user_skill}', [UserSkillController::class,'update']);
Route::delete('user_skill/{user_skill}', [UserSkillController::class,'delete']);

// FAQs 

Route::get('faq', [FaqController::class,'list']);

// Login & Register
Route::post('register', [AuthController::class,'register']);
Route::post('login', [AuthController::class,'login']);
