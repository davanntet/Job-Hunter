<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\FAQ;
use Illuminate\Http\Request;

class FAQController extends Controller
{
    public function index()
    {
        return FAQ::all();
    }
 
    public function show(FAQ $faq)
    {
        return $faq;
    }
 
    public function store(Request $request)
    {
        $faq = FAQ::create($request->all());
 
        return response()->json($faq, 201);
    }
 
    public function update(Request $request, FAQ $faq)
    {
        $faq->update($request->all());
 
        return response()->json($faq, 200);
    }
 
    public function delete(FAQ $faq)
    {
        $faq->delete();
        return response()->json(null, 204);
    }
}
