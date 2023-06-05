<?php

namespace Lifespikes\Employees\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;
use Lifespikes\Employees\Factories\EmployeeFactory;
use Lifespikes\Pay\Models\Pay;
use Lifespikes\Payroll\Models\Payroll;
use Lifespikes\Reviews\Models\Review;


/**
 * @property int $id
 * @property string $name
 * @property string $email
 */
#[TypeScript]
class Employee extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'phone',
        'hired',
        'probatory',
        'email'
    ];

    protected $casts = [
        'hired' => 'boolean',
        'probatory' => 'boolean',
    ];

    protected $attributes = [
        'probatory' => true,
        'hired' => false,
    ];

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function pay()
    {
        return $this->hasOne(Pay::class);
    }

    public function payroll():BelongsTo
    {
        return $this->belongsTo(Payroll::class);
    }

    protected static function factory():EmployeeFactory{
        return EmployeeFactory::new();
    }
}
