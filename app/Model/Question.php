<?php

namespace App\Model;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{

    public static function boot(){
        parent::boot();

        static::creating(function($question){
            $question->slug = str_slug($question->title);
        });

    }

    protected $guarded = [];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function replies(){
        return $this->hasMany(Reply::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function getPath(){
        return "/question/$this->slug";
    }
}
