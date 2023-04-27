<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Employer;

class EmployerController extends Controller
{
    public function index()
    {
        return Employer::all();
    }
 
    public function show(Employer $employer)
    {
        return $employer;
    }
 
    public function store(Request $request)
    {
        $employer = Employer::create($request->all());
 
        return response()->json($employer, 201);
    }
 
    public function update(Request $request, Employer $employer)
    {
        $employer->update($request->all());
 
        return response()->json($employer, 200);
    }
 
    public function delete(Employer $employer)
    {
        $employer->delete();
        return response()->json(null, 204);
    }
}
