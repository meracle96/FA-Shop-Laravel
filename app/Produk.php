<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Gender;
use App\Kategori;
use App\Size;

class Produk extends Model
{
  public function getGender()
  {
    return Gender::where('id', $this->gender_id)->first()->name;
  }

  public function getKategori()
  {
    return Kategori::where('id', $this->kategori_id)->first()->name;
  }

  public function getSize()
  {
    return Size::where('id', $this->size)->first()->name;
  }
}
