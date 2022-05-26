<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    //get reply
    public function reply(){
        return $this->belongsTo(Reply::class);
    }

    //get user
    public function user(){
        return $this->belongsTo(User::class);
    }
}
