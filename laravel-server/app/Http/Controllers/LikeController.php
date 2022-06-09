<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Like;

class LikeController extends Controller
{
    //add product to favorites
    //takes as parameter the product id and user id
    public function addLike(Request $Request) {
        $user_id = $Request->user_id;
        $product_id = $Request->product_id;

        $like = new Like;
        $like->user_id = $user_id;
        $like->product_id = $product_id;

        $like->save();

        return response()->json([
            'status' => 'added',
        ],200);
    }

    //remove product from favorites
    //takes as parameter the product id and user id
    public function removeLike(Request $Request) {
        $user_id = $Request->user_id;
        $product_id = $Request->product_id;

        Like::where('user_id',$user_id)
        ->where('product_id',$product_id)->delete();

        return response()->json([
            'status' => 'removed',
        ],200);
    }
}
