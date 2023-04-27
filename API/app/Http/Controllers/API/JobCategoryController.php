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
 
    public function show($id)
    {
        $job_category = JobCategory::find($id);
        return response()->json([
            'status' => 200,
            'job_category' => $job_category,
        ],200);
    }
 
    public function store(Request $request)
    {
        $job_category = JobCategory::create([
            'job_name' => $request->job_name
        ]);
 
        if($job_category){
            return response()->json([
                'status' => 200,
                'messages' => 'Job category is created successfully'
            ],200);
        }else{
            return response()->json([
                'status' => 500,
                'messages' => 'Something went wrong'
            ],500);
        }
    }
 
    public function update(Request $request, int $id)
    {
        $job_category = JobCategory::find($id);
        $job_category->update([
            'job_name' => $request->job_name
        ]);
 
    }
 
    public function delete($id)
    {
        $job_category  = JobCategory::find($id);
        if($job_category){
            $job_category->delete();
            return response()->json([
                'status' => 200,
                'messages' => 'Job Category is deleted successfully'
            ],200); 
        }else{
            return response()->json([
                'status' => 404,
                'messages' => 'Delete failed'
            ],404);
        }
    }
}
