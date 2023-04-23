<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\JobCategory;
use App\Models\Employee;

class UserInterest extends Model
{
    use HasFactory;
    protected $table = 'user_interests';
    protected $fillable = [
        'job_category_id', 'employee_id'
    ];
    public function job_category() {
        return $this->belongsTo(JobCategory::class);
    }
    public function employee() {
        return $this->belongsTo(Employee::class);
    }
}
