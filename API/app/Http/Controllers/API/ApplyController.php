<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Apply;
use Illuminate\Http\Request;

class ApplyController extends Controller
{
    public function index()
    {
        return Apply::all();
    }
 
    public function show(Apply $apply)
    {
        return $apply;
    }
 
    public function store(Request $request)
    {
        $apply = Apply::create($request->all());
 
        return response()->json($apply, 201);
    }
 
    public function update(Request $request, Apply $apply)
    {
        $apply->update($request->all());
 
        return response()->json($apply, 200);
    }
 
    public function delete(Apply $apply)
    {
        $apply->delete();
        return response()->json(null, 204);
    }
}
