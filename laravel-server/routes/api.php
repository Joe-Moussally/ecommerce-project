<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JWTController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;


//JWT apis
Route::group(['middleware' => 'api'], function($router) {
    Route::post('/register', [JWTController::class, 'register']);
    Route::post('/login', [JWTController::class, 'login']);
    Route::post('/logout', [JWTController::class, 'logout']);
    Route::post('/refresh', [JWTController::class, 'refresh']);
    Route::post('/profile', [JWTController::class, 'profile']);
});

//admin apis
Route::post('/add_product',[ProductController::class, 'addProduct']);
Route::post('/remove_product',[ProductController::class, 'removeProduct']);
Route::post('/edit_quantity',[ProductController::class, 'editQuantity']);
Route::post('/edit_name',[ProductController::class, 'editName']);
Route::post('/edit_price',[ProductController::class, 'editPrice']);
Route::post('/edit_picture',[ProductController::class, 'editPicture']);
Route::post('/edit_category',[ProductController::class, 'editCategory']);

//category apis
Route::post('/add_category',[CategoryController::class, 'addCategory']);
Route::post('/remove_category',[CategoryController::class, 'removeCategory']);