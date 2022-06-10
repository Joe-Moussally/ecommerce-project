<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Like;
use App\Models\Product;

class UserController extends Controller
{
    public function getLiked(Request $Request) {
        $user_id = $Request->user_id;

        $liked = Like::where('user_id',$user_id)->get();

        return response()->json([
            'status' => 'success',
            'liked' => $liked
        ],200);
    }
}
