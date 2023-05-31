<?php

namespace Lifespikes\Payroll\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Lifespikes\Employees\Models\Employee;
use Lifespikes\Payroll\Factories\PayrollFactory;

class Payroll extends Model
{
    use HasFactory;

    protected $fillable = [
        'frequency',
        'flush_at',
    ];

    public function employees()
    {
        return $this->hasMany(Employee::class);
    }

    protected static function factory():PayrollFactory
    {
        return PayrollFactory::new();
    }

}
