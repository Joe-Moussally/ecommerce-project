<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JWTController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\UserController;


//JWT apis
Route::group(['middleware' => 'api'], function($router) {
    Route::post('/register', [JWTController::class, 'register']);
    Route::post('/login', [JWTController::class, 'login']);
    Route::post('/logout', [JWTController::class, 'logout']);
    Route::post('/refresh', [JWTController::class, 'refresh']);
    Route::post('/profile', [JWTController::class, 'profile']);
});

//admin apis
Route::post('/add_product',[AdminController::class, 'addProduct']);
Route::post('/remove_product',[AdminController::class, 'removeProduct']);
Route::post('/edit_quantity',[AdminController::class, 'editQuantity']);
Route::post('/edit_name',[AdminController::class, 'editName']);
Route::post('/edit_price',[AdminController::class, 'editPrice']);
Route::post('/edit_picture',[AdminController::class, 'editPicture']);
Route::post('/edit_category',[AdminController::class, 'editCategory']);

//product apis
Route::post('/products/{id?}',[ProductController::class, 'getAllProducts']);
Route::post('/get_all_shoes',[ProductController::class, 'getAllShoes']);
Route::post('/get_all_tops',[ProductController::class, 'getAllTops']);
Route::post('/get_all_pants',[ProductController::class, 'getAllPants']);

//category apis
Route::post('/add_category',[CategoryController::class, 'addCategory']);
Route::post('/remove_category',[CategoryController::class, 'removeCategory']);

//like apis
Route::post('/add_like',[LikeController::class, 'addLike']);
Route::post('/remove_like',[LikeController::class, 'removeLike']);

//user apis
Route::post('/get_liked',[UserController::class, 'getLiked']);