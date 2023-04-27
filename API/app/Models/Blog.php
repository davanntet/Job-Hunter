<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Tag;

class Blog extends Model
{
    use HasFactory;
    protected $table = 'blogs';
    protected $fillable = [
        'user_id','tag_id','article','view_count'
    ];
    public function user() {
        return $this->belongsTo(User::class);
    }
    public function tag() {
        return $this->belongsTo(Tag::class);
    }
}
