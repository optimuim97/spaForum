<?php

namespace App\Http\Controllers;

use App\Model\Like;
use App\Model\Reply;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class LikeController extends Controller
{
     /**
     * Create a new CategoryController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('JWT');
    }

    public function likeIt(Reply $reply){
        $reply->like()->create([
            'user_id'=> 1
        ]);
        return response('Created', Response::HTTP_CREATED);
    }


    public function unLikeIt(Reply $reply){
        $reply->like()->where('user_id', 1)->delete();
        return response( null , Response::HTTP_NO_CONTENT );
    }
}
