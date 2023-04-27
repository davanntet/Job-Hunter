<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Like;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function index()
    {
        return Like::all();
    }
 
    public function show(Like $like)
    {
        return $like;
    }
 
    public function store(Request $request)
    {
        $like = Like::create($request->all());
 
        return response()->json($like, 201);
    }
 
    public function update(Request $request, Like $like)
    {
        $like->update($request->all());
 
        return response()->json($like, 200);
    }
 
    public function delete(Like $like)
    {
        $like->delete();
        return response()->json(null, 204);
    }
}
