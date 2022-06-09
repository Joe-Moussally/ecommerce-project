<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\category;

class CategoryController extends Controller
{
    // add a clothe category
    public function addCategory(Request $Request) {

        $category_name = $Request->category_name;

        //check if category already exists
        if (Category::where('category',$category_name)->exists()) {
            return response()->json([
                'status' => 'exists',
            ],200);
        }

        $category = new Category;
        $category->category = $category_name;
        $category->save();

        return response()->json([
            'status' => 'added',
            'category' => $category_name
        ],200);
    }

    // remove a clothe category
    public function removeCategory(Request $Request) {
        $category_name = $Request->category_name;

        $product_id = $Request->product_id;

        $category = Category::where('category',$category_name)->first();
        $category->delete();

        return response()->json([
            'status' => 'deleted'
        ],200);
    }
    
}
