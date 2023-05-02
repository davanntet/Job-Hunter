<?php

namespace App\Http\Controllers\API;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;


class PostController extends Controller
{
    public function index()
    {
        return Post::all();
    }
 
    public function show( $id)
    {
        $post = Post::find($id);
        if($post){
            return response()->json([
            'status' => '200',
            'post' => $post
            ],200);
        }else{
            return response()->json([
                'status' => '404',
                'post' => 'Not Found'
            ],404);
        }
        
    }
 
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'user_id' => 'required',
            'category_id' => 'required',
            'job_category_id' => 'required',
            'is_active' => 'required',
            'job_name' => 'required',
            'salary' => 'required',
            'location' => 'required',
            'job_description' => 'required',
            'role' => 'required',
            'requirement' => 'required',
            'benefit' => 'required'
        ]);
        if($validator->failed()){
            return response()->json([
                'status' => 422,
                'erorrs' => $validator->messages()
            ],422);
        }else{
            $post = Post::create($request->all());
        }
        if($post){
            return response()->json([
                'status' => 200,
                'message' => 'Post successfully'
            ],200);
        }else{
            return response()->json([
                'status' => 500,
                'message' => 'Post fail'
            ],500);
        }
    }
 
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(),[
            'user_id' => 'required',
            'category_id' => 'required',
            'job_category_id' => 'required',
            'is_active' => 'required',
            'job_name' => 'required',
            'salary' => 'required',
            'location' => 'required',
            'job_description' => 'required',
            'role' => 'required',
            'requirement' => 'required',
            'benefit' => 'required'
        ]);
        if($validator->fails()){
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ]);
        }else{
            $post = Post::find($id);
            $post->update($request->all());
            if($post){
                return response()->json([
                    'status' => 200,
                    'message' => 'Successfully'
                ],200);
            }else{
                return response()->json([
                    'status' => 404,
                    'message' => 'Failed'
                ],404);
            }
        }
    }
 
    public function delete($id)
    {
        $post = Post::find($id);
        if($post){
            $post->delete();
            return response()->json([
                'status' => '200',
                'message' => 'Delete Successfully'
            ],200);
        }else{
            return response()->json([
                'status' => '404',
                'message' => 'Delete fail'
            ]);
        }
    }
}
