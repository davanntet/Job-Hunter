<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;


class UserController extends Controller
{
    public function index()
    {
        return User::all();
    }
 
    public function show($id)
    {
        $user = User::find($id);
        if($user){
            return response()->json([
                'status' => 200,
                'user' => $user
            ],200);
        }else{
            return response()->json([
                'status' => 404,
                'message' => 'User not found'
            ],400);
        }
    }
 
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            // 'name' => 'required|string|min:5|max:50',
            // 'email' => 'required|email|min:13|max:100',
            // 'password' => 'required|password|min:8|regex:/[a-z]/|regex:/[A-Z]/|regex:/[0-9]/|regex:/[@$!%*#?&]/',
            // 'username' => 'required|string|min:5|max:50',
            // 'gender' => 'required',
            'profile' => 'required | mimes:jpeg,jpg,png | max:1000',            
            'banner' => 'required | mimes:jpeg,jpg,png | max:1000',
            'bio' => 'required',
            'cv' => 'required',
        ]);

        if($validator->fails()){
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ]);
        }else{
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => $request->password,
                'username' => $request->username,
                'gender' => $request->gender,
                // profile
                // banner
                'bio' => $request->bio,
                'cv' => $request->cv,

            ]);

            if($user){
                return response()->json([
                    'status' => 200,
                    'messages' => 'User is created successfully'
                ],200);
            }else{
                return response()->json([
                    'status' => 500,
                    'messages' => 'Something went wrong'
                ],500);
            }
        }
    }
 
    public function update(Request $request, User $user)
    {
        $user->update($request->all());
 
        return response()->json($user, 200);
    }
 
    
    public function delete( $id)
    {
        $user = User::find($id);
        if($user){
            $user->delete();
            return response()->json([
                'status' => 200,
                'messages' => 'User is deleted successfully'
            ],200);
        }else{
            return response()->json([
                'status' => 500,
                'messages' => 'No user'
            ],500);
        }
    }
}
