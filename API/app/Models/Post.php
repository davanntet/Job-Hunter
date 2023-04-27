<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Category;
use App\Models\JobCategory;

class Post extends Model
{
    use HasFactory;
    protected $table = 'posts';
    protected $fillable = [
        'user_id',
        'category_id',
        'job_category_id',
        'is_active',
        'job_name',
        'salary',
        'image',
        'location',
        'job_description',
        'role',
        'requirement',
        'benefit'
    ];
    public function user() {
        return $this->belongsTo(User::class);
    }
    public function category() {
        return $this->belongsTo(Category::class);
    }
    public function job_category() {
        return $this->belongsTo(JobCategory::class);
    }
}
