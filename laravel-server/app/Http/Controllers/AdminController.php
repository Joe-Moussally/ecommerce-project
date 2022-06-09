<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller {
    
    //Add product
    public function addProduct(Request $Request) {

        //set category_id here by comparing string and value
        //--------------------------------------------------

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

    //remove a product
    public function removeProduct(Request $Request) {

        $product_id = $Request->product_id;

        Product::find($product_id)->delete();

        return response()->json([
            'status' => 'deleted'
        ],200);

    }

    //change product quantity
    public function editQuantity(Request $Request) {

        $product_id = $Request->product_id;
        $qtt = $Request->quantity;

        $product = Product::find($product_id);
        $product->quantity = $qtt;
        $product->save();

        return response()->json([
            'status' => 'changed',
            'new qtt' => $qtt
        ],200);

    }

    //change product quantity
    public function editName(Request $Request) {

        $product_id = $Request->product_id;
        $name = $Request->name;

        $product = Product::find($product_id);
        $product->name = $name;
        $product->save();

        return response()->json([
            'status' => 'changed',
            'new name' => $name
        ],200);

    }

    //change product price
    public function editPrice(Request $Request) {

        $product_id = $Request->product_id;
        $price = $Request->price;

        $product = Product::find($product_id);
        $product->price = $price;
        $product->save();

        return response()->json([
            'status' => 'changed',
            'new price' => $price
        ],200);

    }

    //change product picture
    public function editPicture(Request $Request) {

        $product_id = $Request->product_id;
        $picture = $Request->picture;

        $product = Product::find($product_id);
        $product->picture = $picture;
        $product->save();

        return response()->json([
            'status' => 'changed',
            'new picture' => $picture
        ],200);

    }

    //change product category
    public function editCategory(Request $Request) {

        //compare category strings with id
        //---------------------------

        $product_id = $Request->product_id;
        $category_id = $Request->category_id;

        $product = Product::find($product_id);
        $product->category_id = $category_id;
        $product->save();

        return response()->json([
            'status' => 'changed',
            'new category' => $category_id
        ],200);
    }
}
