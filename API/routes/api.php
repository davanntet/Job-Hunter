<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\CompanyController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\JobCategoryController;
use App\Http\Controllers\API\UserInterestController;
use App\Http\Controllers\API\SkillController;
use App\Http\Controllers\API\UserSkillController;
use App\Http\Controllers\API\ApplyController;
use App\Http\Controllers\API\ExperienceController;
use App\Http\Controllers\API\TagController;
use App\Http\Controllers\API\BlogController;
use App\Http\Controllers\API\QuestionController;
use App\Http\Controllers\API\AnswerController;
use App\Http\Controllers\API\LikeController;
use App\Http\Controllers\API\FAQController;


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

// Company
Route::get('company', [CompanyController::class,'index']);
Route::get('company/{company}', [CompanyController::class,'show']);
Route::post('company', [CompanyController::class,'store']);
Route::put('company/{company}', [CompanyController::class,'update']);
Route::delete('company/{company}', [CompanyController::class,'delete']);

// Category
Route::get('category', [CategoryController::class,'index']);
Route::get('category/{category}', [CategoryController::class,'show']);
Route::post('category', [CategoryController::class,'store']);
Route::put('category/{category}', [CategoryController::class,'update']);
Route::delete('category/{category}', [CategoryController::class,'delete']);

// Job Category
Route::get('job_category', [JobCategoryController::class,'index']);
Route::get('job_category/{job_category}', [JobCategoryController::class,'show']);
Route::post('job_category', [JobCategoryController::class,'store']);
Route::put('job_category/{job_category}', [JobCategoryController::class,'update']);
Route::delete('job_category/{job_category}', [JobCategoryController::class,'delete']);

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

// Apply
Route::get('apply', [ApplyController::class,'index']);
Route::get('apply/{apply}', [ApplyController::class,'show']);
Route::post('apply', [ApplyController::class,'store']);
Route::put('apply/{apply}', [ApplyController::class,'update']);
Route::delete('apply/{apply}', [ApplyController::class,'delete']);

// Experience
Route::get('experience', [ExperienceController::class,'index']);
Route::get('experience/{experience}', [ExperienceController::class,'show']);
Route::post('experience', [ExperienceController::class,'store']);
Route::put('experience/{experience}', [ExperienceController::class,'update']);
Route::delete('experience/{experience}', [ExperienceController::class,'delete']);

// Tag
Route::get('tag', [TagController::class,'index']);
Route::get('tag/{tag}', [TagController::class,'show']);
Route::post('tag', [TagController::class,'store']);
Route::put('tag/{tag}', [TagController::class,'update']);
Route::delete('tag/{tag}', [TagController::class,'delete']);

// Blog & Resource
Route::get('blog', [BlogController::class,'index']);
Route::get('blog/{blog}', [BlogController::class,'show']);
Route::post('blog', [BlogController::class,'store']);
Route::put('blog/{blog}', [BlogController::class,'update']);
Route::delete('blog/{blog}', [BlogController::class,'delete']);

// Question
Route::get('question', [QuestionController::class,'index']);
Route::get('question/{question}', [QuestionController::class,'show']);
Route::post('question', [QuestionController::class,'store']);
Route::put('question/{question}', [QuestionController::class,'update']);
Route::delete('question/{question}', [QuestionController::class,'delete']);

// Answer
Route::get('answer', [AnswerController::class,'index']);
Route::get('answer/{answer}', [AnswerController::class,'show']);
Route::post('answer', [AnswerController::class,'store']);
Route::put('answer/{answer}', [AnswerController::class,'update']);
Route::delete('answer/{answer}', [AnswerController::class,'delete']);

// Like
Route::get('like', [LikeController::class,'index']);
Route::get('like/{like}', [LikeController::class,'show']);
Route::post('like', [LikeController::class,'store']);
Route::put('like/{like}', [LikeController::class,'update']);
Route::delete('like/{like}', [LikeController::class,'delete']);

// FAQs
Route::get('faq', [FAQController::class,'index']);
Route::get('faq/{faq}', [FAQController::class,'show']);
Route::post('faq', [FAQController::class,'store']);
Route::put('faq/{faq}', [FAQController::class,'update']);
Route::delete('faq/{faq}', [FAQController::class,'delete']);