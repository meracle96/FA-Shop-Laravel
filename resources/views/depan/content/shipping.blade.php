@extends('depan.partials.layout')
@section('content')
  <div id="content">
    <div class="product-list-category-slider">
    <div class="container">
      <h1>Shipping Info</h1>
      <br>
      <form action="{{ route('depan.shippinginfo.submit')}}" method="post">
        {{ csrf_field() }}
        <div class="form-group">
          <label>Address : </label>
          <input type="text" name="address" class="form-control">
        </div>
        <div class="form-group">
          <label>ZIP Code : </label>
          <input type="text" name="zip" class="form-control">
        </div>
        <div class="form-group">
          <label>Country : </label>
          <input type="text" name="country" class="form-control">
        </div>
        <div class="form-group">
          <label>Phone : </label>
          <input type="number" name="phone" class="form-control">
        </div>
        <input type="submit" name="submit" value="Checkout" class="btn btn-success pull-right">
      </form>
    </div>
    <br><br>
  </div>
</div>
@endsection
