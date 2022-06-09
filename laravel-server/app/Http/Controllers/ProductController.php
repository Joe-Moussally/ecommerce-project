<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    //Add product
    public function addProduct(Request $Request) {

        //set category_id here by comparing string and value
        

        $product = new Product;

        $product->name = $Request->name;
        $product->price = $Request->price;
        $product->quantity = $Request->quantity;
        $product->category_id = $Request->category_id;
        $product->picture = $Request->picture;

        $product->save();

        return response()->json([
            'status' => 'added',
            'product' => $product
        ],200);
    }
}
