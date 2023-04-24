<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Skill;

class UserSkill extends Model
{
    use HasFactory;
    protected $table = 'user_skills';
    protected $fillable = [
        'user_id','skill_id'
    ];
    public function user() {
        return $this->belongsTo(User::class);
    }
    public function skill() {
        return $this->belongsTo(Skill::class);
    }
}
