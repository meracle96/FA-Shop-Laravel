<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'DepanController@index')->name('depan.home');
Route::get('/mens', 'DepanController@mens')->name('depan.mens');
Route::get('/products/{id}', 'ProdukController@show')->name('depan.mens.show');
Route::get('/womens', 'DepanController@womens')->name('depan.womens');
Route::get('/kids', 'DepanController@kids')->name('depan.kids');
Route::get('/all', 'DepanController@all')->name('depan.all');

Auth::routes();

Route::resource('/cart','CartController');
Route::get('/shipping-info', 'CheckoutController@shippinginfo')->name('depan.shippinginfo');
Route::post('/shipping-info', 'CheckoutController@shippinginfostore')->name('depan.shippinginfo.submit');

Route::get('/success', 'CheckoutController@success')->name('depan.success');

Route::get('/home', 'HomeController@index')->name('home');

Route::resource('/admin/product', 'AdminProductController');

Route::get('/admin/pendingorder', 'AdminController@pendingOrders')->name('admin.pendingorder');
Route::put('/admin/pendingorder/{id}', 'AdminController@acceptOrders')->name('admin.acceptorder');

Route::get('/admin/order', 'AdminController@successOrders')->name('admin.successorder');

Route::get('/admin', 'AdminController@index')->name('admin.home');
