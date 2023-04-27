<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Answer;

class Like extends Model
{
    use HasFactory;
    protected $table = 'likes';
    protected $fillable = [
        'user_id','answer_id'
    ];
    public function user() {
        return $this->belongsTo(User::class);
    }public function answer() {
        return $this->belongsTo(Answer::class);
    }
}
