<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index()
    {
        return Blog::all();
    }
 
    public function show(Blog $blog)
    {
        return $blog;
    }
 
    public function store(Request $request)
    {
        $blog = Blog::create($request->all());
 
        return response()->json($blog, 201);
    }
 
    public function update(Request $request, Blog $blog)
    {
        $blog->update($request->all());
 
        return response()->json($blog, 200);
    }
 
    public function delete(Blog $blog)
    {
        $blog->delete();
        return response()->json(null, 204);
    }
}
