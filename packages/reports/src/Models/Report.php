<?php

namespace Lifespikes\Reports\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Lifespikes\Expenses\Models\Expense;

class Report extends Model
{
    use HasFactory;

    protected $casts = [
        'start_period' => 'datetime',
        'end_period' => 'datetime',
    ];

    protected $fillable = [
        'start_period',
        'end_period',
        'type',
        'total',
    ];


}
