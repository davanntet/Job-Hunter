<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Experience;
use Illuminate\Http\Request;

class ExperienceController extends Controller
{
    public function index()
    {
        return Experience::all();
    }
 
    public function show(Experience $experience)
    {
        return $experience;
    }
 
    public function store(Request $request)
    {
        $experience = Experience::create($request->all());
 
        return response()->json($experience, 201);
    }
 
    public function update(Request $request, Experience $experience)
    {
        $experience->update($request->all());
 
        return response()->json($experience, 200);
    }
 
    public function delete(Experience $experience)
    {
        $experience->delete();
        return response()->json(null, 204);
    }
}
