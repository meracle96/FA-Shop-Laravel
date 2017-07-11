<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Gender;
use App\Kategori;
use Image;
use App\Produk;
use App\Size;

class AdminProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $genders = Gender::all();
        $kategoris = Kategori::all();
        $products = Produk::latest()->get();
        $sizes = Size::all();
        return view('belakang.content.product', compact('genders','kategoris','products','sizes'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $foto = $request->file('foto');
      $filename = time().'.'.$foto->getClientOriginalExtension();
      Image::make($foto)->resize(330,421)->save( public_path('/uploads/products/'.$filename));

      $product = new Produk;

      $product->name = $request->name;
      $product->penjelasan = $request->penjelasan;
      $product->gender_id = $request->gender_id;
      $product->kategori_id = $request->kategori_id;
      $product->size = $request->size;
      $product->price = $request->price;
      $product->foto = $filename;

      $product->save();

      return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
      $genders = Gender::all();
      $kategoris = Kategori::all();
      $sizes = Size::all();
      $product = Produk::find($id);
      return view('belakang.content.editproduct', compact('genders','kategoris','product','sizes'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
      $foto = $request->file('foto');
      $filename = time().'.'.$foto->getClientOriginalExtension();
      Image::make($foto)->resize(330,421)->save( public_path('/uploads/products/'.$filename));

      $product = Produk::find($id);
      $product->name = $request->name;
      $product->penjelasan = $request->penjelasan;
      $product->gender_id = $request->gender_id;
      $product->kategori_id = $request->kategori_id;
      $product->size = $request->size;
      $product->price = $request->price;
      $product->foto = $filename;

      $product->save();

      return redirect()->route('product.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
      $product = Produk::find($id);
      $product->delete();
      return back();
    }
}
