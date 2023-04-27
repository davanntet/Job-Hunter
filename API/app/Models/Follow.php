<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Employee;
use App\Models\Employer;

class Follow extends Model
{
    use HasFactory;
    protected $table = 'follows';
    protected $fillable = [
        'employer_id','employee_id'
    ];
    public function employer() {
        return $this->belongsTo(Employer::class);
    }
    public function employee() {
        return $this->belongsTo(Employee::class);
    }
}
