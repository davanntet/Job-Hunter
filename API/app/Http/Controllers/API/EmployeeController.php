<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Employee;

class EmployeeController extends Controller
{
    public function index()
    {
        return Employee::all();
    }
 
    public function show(Employee $employee)
    {
        return $employee;
    }
 
    public function store(Request $request)
    {
        $employee = Employee::create($request->all());
 
        return response()->json($employee, 201);
    }
 
    public function update(Request $request, Employee $employee)
    {
        $employee->update($request->all());
 
        return response()->json($employee, 200);
    }
 
    public function delete(Employee $employee)
    {
        $employee->delete();
        return response()->json(null, 204);
    }
}
