@extends('depan.partials.layout')
@section('content')
  <div id="content">
    <div class="product-list-category-slider">
      <div class="container">
        <h1>Your Shopping Cart</h1>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            @foreach ($cartItems as $cartItem)
            <tr>
              <td width="30%">{{$cartItem->name}}</td>
              <td width="30%">${{$cartItem->price}}</td>
              <td width="20%">
                <form action="{{ route('cart.update',['id' => $cartItem->rowId]) }}" method="post">
                  {{ csrf_field() }}
                  <input type="hidden" name="_method" value="PUT">
                  <input type="text" name="qty" value="{{$cartItem->qty}}">
                  <input type="submit" name="submit" value="Change ?" class="btn btn-default">
                </form>
              </td>
              <td width="20%">
                <form action="{{ route('cart.destroy',$cartItem->rowId) }}" method="post">
                  {{ csrf_field() }}
                  {{ method_field('DELETE') }}
                  <input type="submit" name="submit" value="Delete" class="btn btn-danger">
                </form>
              </td>
            </tr>
            @endforeach
            <tr>
              <th></th>
              <th></th>
              <th>Items : {{ Cart::count() }}</th>
              <th>Grand Total : ${{ Cart::subtotal() }}</th>
            </tr>
          </tbody>
        </table>
        <a href="/shipping-info" class="btn btn-success btn-lg pull-right">Checkout</a>
        <br><br>
        <br><br>
      </div>
    </div>
  </div>
@endsection
