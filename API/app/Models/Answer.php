<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Question;

class Answer extends Model
{
    use HasFactory;
    protected $table = 'answers';
    protected $fillable = [
        'user_id','question_id','answer'
    ];
    public function user() {
        return $this->belongsTo(User::class);
    }
    public function question() {
        return $this->belongsTo(Question::class);
    }
}
