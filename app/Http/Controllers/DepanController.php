<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Produk;

class DepanController extends Controller
{
    public function index()
    {
      $mens = Produk::where('gender_id',1)->latest()->paginate(5);
      $womens = Produk::where('gender_id',2)->latest()->paginate(5);
      $kids = Produk::where('gender_id',3)->latest()->paginate(5);
      return view('depan.content.home', compact('mens','womens','kids'));
    }

    public function mens()
    {
      $mens = Produk::where('gender_id',1)->latest()->paginate(8);
      return view('depan.content.mens', compact('mens'));
    }

    public function womens()
    {
      $womens = Produk::where('gender_id',2)->latest()->paginate(8);
      return view('depan.content.womens', compact('womens'));
    }

    public function kids()
    {
      $kids = Produk::where('gender_id',3)->latest()->paginate(8);
      return view('depan.content.kids', compact('kids'));
    }

    public function all()
    {
      $alls = Produk::latest()->paginate(8);
      return view('depan.content.alls', compact('alls'));
    }

}
