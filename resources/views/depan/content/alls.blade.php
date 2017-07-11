@extends('depan.partials.layout')
@section('content')
  <div id="content">
    <div class="product-list-category-slider">

    <div class="container">
      <h1>All Collection</h1>
      <br>
    <div class="row">
      @foreach ($alls as $all)
      <div class="col-md-3">
        <div class="item">
          <div class="item-product">
            <div class="item-product-thumb">
              <a href="{{route('depan.mens.show',['id'=>$all->id])}}"><img src="{{ asset('uploads/products')}}/{{$all->foto}}" alt="" /></a>
            </div>
            <div class="item-product-info">
              <h3 class="title-product"><a href="{{route('depan.mens.show',['id'=>$all->id])}}">{{ $all->name }} - {{ $all->getKategori() }}</a></h3>
              <div class="info-product-price">
                <span>${{ $all->price }}</span>
                <a href="{{route('cart.edit',['id'=>$all->id]) }}" class="btn btn-success btn-sm pull-right">Add To Cart</a>
              </div>
            </div>
          </div>
        </div>
        <br><br>
      </div>
      @endforeach
    </div>
    <div class="row">
      <div class="col-md-2 col-md-offset-5">
        {{ $alls->links() }}
      </div>
    </div>
    </div>
    <br><br>
  </div>
@endsection
