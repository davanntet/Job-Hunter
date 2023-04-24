<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        return Post::all();
    }
 
    public function show(Post $post)
    {
        return $post;
    }
 
    public function store(Request $request)
    {
        $post = Post::create($request->all());
 
        return response()->json($post, 201);
    }
 
    public function update(Request $request, Post $post)
    {
        $post->update($request->all());
 
        return response()->json($post, 200);
    }
 
    public function delete(Post $post)
    {
        $post->delete();
        return response()->json(null, 204);
    }
}
