<?php

namespace Lifespikes\Pay\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Lifespikes\Employees\Models\Employee;
use Lifespikes\Pay\Factories\PayFactory;

class Pay extends Model
{
    use HasFactory;

    protected $fillable = [
        'salary',
        'units',
        'type'
    ];


    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }

    protected static function factory():PayFactory{
        return PayFactory::new();
    }
}
