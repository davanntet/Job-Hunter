<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Follow;
use Illuminate\Http\Request;

class FollowController extends Controller
{
    public function index()
    {
        return Follow::all();
    }
 
    public function show(Follow $follow)
    {
        return $follow;
    }
 
    public function store(Request $request)
    {
        $follow = Follow::create($request->all());
 
        return response()->json($follow, 201);
    }
 
    public function update(Request $request, Follow $follow)
    {
        $follow->update($request->all());
 
        return response()->json($follow, 200);
    }
 
    public function delete(Follow $follow)
    {
        $follow->delete();
        return response()->json(null, 204);
    }
}
