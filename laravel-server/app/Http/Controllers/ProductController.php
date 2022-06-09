<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;

class ProductController extends Controller
{
    //get all products by newest
    public function getAllProducts() {
        $products = Product::orderBy('created_at','desc')->get();

        return response()->json([
            'status' => 'success',
            'products' => $products
        ],200);
    }

    //get all shoes product
    public function getAllShoes() {
    
        $shoes = Product::select('name')->category;

        return response()->json([
            'status' => 'success',
            'products' => $shoes
        ],200);
    }

}
