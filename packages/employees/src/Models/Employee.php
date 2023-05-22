<?php

namespace Lifespikes\Employees\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Lifespikes\Employees\Factories\EmployeeFactory;

class Employee extends Model
{
    use HasFactory;

    protected $fillable = [];

    protected static function factory():EmployeeFactory{
        return EmployeeFactory::new();
    }
}
