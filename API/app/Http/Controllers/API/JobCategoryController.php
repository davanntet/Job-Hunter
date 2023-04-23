<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\JobCategory;
use Illuminate\Http\Request;

class JobCategoryController extends Controller
{
    public function index()
    {
        return JobCategory::all();
    }
 
    public function show(JobCategory $job_category)
    {
        return $job_category;
    }
 
    public function store(Request $request)
    {
        $job_category = JobCategory::create($request->all());
 
        return response()->json($job_category, 201);
    }
 
    public function update(Request $request, JobCategory $job_category)
    {
        $job_category->update($request->all());
 
        return response()->json($job_category, 200);
    }
 
    public function delete(JobCategory $job_category)
    {
        $job_category->delete();
        return response()->json(null, 204);
    }
}
