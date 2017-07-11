<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Produk;
use App\User;

class Order extends Model
{
    protected $fillable = ['total','delivered'];

    public function orderItems()
    {
      return $this->belongsToMany(Produk::class)->withPivot('qty','total');
    }

    public function user()
    {
      return $this->belongsTo(User::class);
    }
}
