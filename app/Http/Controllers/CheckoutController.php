<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Address;
use Auth;
use Cart;

class CheckoutController extends Controller
{
    public function __construct()
    {
      return $this->middleware('auth');
    }

    public function shippinginfo()
    {
      return view('depan.content.shipping');
    }

    public function shippinginfostore(Request $request)
    {
      Auth::user()->address()->create($request->all());

      $order = Auth::user()->orders()->create([
        'total' => Cart::subtotal(),
        'delivered' => 0
      ]);

      $cartItems = Cart::content();
      foreach($cartItems as $cartItem)
      {
        $order->orderItems()->attach($cartItem->id,[
          'qty' => $cartItem->qty,
          'total' => $cartItem->qty*$cartItem->price
        ]);
      }

      Cart::destroy();

      return redirect()->route('depan.success');
    }

    public function success()
    {
      return view('depan.content.success');
    }
}
