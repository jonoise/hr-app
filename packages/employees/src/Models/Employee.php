<?php

namespace Lifespikes\Employees\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Lifespikes\Employees\Factories\EmployeeFactory;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;


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
    ];

    protected $attributes = [
        'hired' => false,
        'probatory' => true,
    ];

    protected static function factory():EmployeeFactory{
        return EmployeeFactory::new();
    }
}
