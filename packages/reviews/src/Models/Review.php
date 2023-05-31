<?php

namespace Lifespikes\Reviews\Models;

use Illuminate\Database\Eloquent\Model;
use Lifespikes\Employees\Models\Employee;
use Lifespikes\Reviews\Factories\ReviewFactory;

class Review extends Model
{
    protected $fillable = [
        'score',
        'comment',
    ];

    protected $attributes = [
        'score' => 0,
        'comment' => '',
    ];

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }

    protected static function factory()
    {
        return ReviewFactory::new();
    }
}
