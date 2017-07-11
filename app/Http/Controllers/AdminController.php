<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Order;

class AdminController extends Controller
{
    public function __construct()
    {
      return $this->middleware(['admin','auth']);
    }

    public function index()
    {
      return view('belakang.content.home');
    }

    public function pendingOrders()
    {
      $orders = Order::where('delivered',0)->get();
      return view('belakang.content.pendingorder', compact('orders'));
    }

    public function successOrders()
    {
      $orders = Order::where('delivered',1)->get();
      return view('belakang.content.successorder', compact('orders'));
    }

    public function acceptOrders(Request $request, $id)
    {
      $order = Order::find($id);
      $order->delivered = $request->delivered;
      $order->save();

      return back();
    }
}
