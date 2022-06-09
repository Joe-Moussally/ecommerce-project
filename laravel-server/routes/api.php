<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JWTController;
use App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['middleware' => 'api'], function($router) {
    Route::post('/register', [JWTController::class, 'register']);
    Route::post('/login', [JWTController::class, 'login']);
    Route::post('/logout', [JWTController::class, 'logout']);
    Route::post('/refresh', [JWTController::class, 'refresh']);
    Route::post('/profile', [JWTController::class, 'profile']);
});

// Route::group(['prefix' => 'admin'], function(){
//     Route::group(['middleware' => 'role.user'], function(){
//         Route::get('/', [AdminController::class, 'getAllSalaries']);
//         Route::get('/salaries', [AdminController::class, 'getAllSalaries']);
//     });
// });

Route::post('/add_product',[ProductController::class, 'addProduct']);
Route::post('/remove_product',[ProductController::class, 'removeProduct']);