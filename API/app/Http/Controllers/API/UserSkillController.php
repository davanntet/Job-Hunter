<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\UserSkill;
use Illuminate\Http\Request;

class UserSkillController extends Controller
{
    public function index()
    {
        return UserSkill::all();
    }
 
    public function show(UserSkill $user_skill)
    {
        return $user_skill;
    }
 
    public function store(Request $request)
    {
        $user_skill = UserSkill::create($request->all());
 
        return response()->json($user_skill, 201);
    }
 
    public function update(Request $request, UserSkill $user_skill)
    {
        $user_skill->update($request->all());
 
        return response()->json($user_skill, 200);
    }
 
    public function delete(UserSkill $user_skill)
    {
        $user_skill->delete();
        return response()->json(null, 204);
    }
}
