<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\UserInterest;
use Illuminate\Http\Request;

class UserInterestController extends Controller
{
    public function index()
    {
        return UserInterest::all();
    }
 
    public function show(UserInterest $userInterest)
    {
        return $userInterest;
    }
 
    public function store(Request $request)
    {
        $userInterest = UserInterest::create($request->all());
 
        return response()->json($userInterest, 201);
    }
 
    public function update(Request $request, UserInterest $userInterest)
    {
        $userInterest->update($request->all());
 
        return response()->json($userInterest, 200);
    }
 
    public function delete(UserInterest $userInterest)
    {
        $userInterest->delete();
        return response()->json(null, 204);
    }
}
