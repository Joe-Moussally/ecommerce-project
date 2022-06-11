<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;

class ProductController extends Controller
{
    //get all products by newest
    public function getAllProducts($id = null) {

        if ($id != null) {
            $product = Product::find($id);

            return response()->json([
                'status' => 'success',
                'product' => $product
            ],200);
        }

        $products = Product::orderBy('created_at','desc')->get();

        return response()->json([
            'status' => 'success',
            'products' => $products
        ],200);
    }

    //get all shoes product
    public function getAllShoes() {

        $shoes = Product::where('category_id',1)->get();

        return response()->json([
            'status' => 'success',
            'products' => $shoes
        ],200);
    }

    //get all shoes tops
    public function getAllTops() {

        $tops = Product::where('category_id',2)->get();

        return response()->json([
            'status' => 'success',
            'products' => $tops
        ],200);
    }

    //get all shoes tops
    public function getAllPants() {
        
        $shoes = Product::where('category_id',3)->get();
        
        return response()->json([
            'status' => 'success',
            'products' => $shoes
        ],200);
    }

}