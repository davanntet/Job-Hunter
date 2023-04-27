<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Company;

class Experience extends Model
{
    use HasFactory;
    protected $table = 'experiences';
    protected $fillable = [
        'user_id','company_id','start','end','position'
    ];
    public function user() {
        return $this->belongsTo(User::class);
    }
    public function company() {
        return $this->belongsTo(Company::class);
    }
}
