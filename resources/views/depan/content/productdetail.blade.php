@extends('depan.partials.layout')
@section('content')
  <!-- style -->
  <link rel="stylesheet" href="{{ asset('js/owl2/assets/owl.carousel.css') }}">
  <link href="{{ asset('css/prettyPhoto.css') }}" media="all" type="text/css" rel="stylesheet" />
  <link href="{{ asset('css/swiper.min.css') }}" media="all" type="text/css" rel="stylesheet" />
  <link href="{{ asset('css/styles2.css') }}" media="all" type="text/css" rel="stylesheet" />
  <!-- js -->
  <script src="{{ asset('js/plugin/plugin.js') }}"></script>
  <script src="{{ asset('js/owl.carousel-2.js') }}"></script>
  <script src="{{ asset('js/jquery.prettyPhoto.js') }}"></script>
  <script src="{{ asset('js/swiper.min.js') }}"></script>
  <script src="{{ asset('js/jquery.zoom.js') }}"></script>
  <script src="{{ asset('js/nautica.js') }}"></script>
  <script src="{{ asset('js/engo-apps.js') }}"></script>
  <div id="content">
    <div class="product-list-category-slider">
      <div class="container">
        <!-- product single -->
    		<div class="product-single clearfix">
    			<div class="container container-no-padding custom-container">
    				<div class="row">
    					<div class="col-sm-4 col-xs-12">
                  <img src="{{asset('uploads/products')}}/{{$product->foto}}" width="400">
              </div>
    					<div class="col-sm-8 col-xs-12 custom-col-detail">
    						<!-- product-shop -->
    						<div class="product-shop">
    							<h1>{{ $product->name }} - ( {{ $product->getGender()}} )</h1>
                  <hr>
                  <h4>
                    Product type : {{ $product->getKategori()}}
                  </h4>
    							<div class="price-box product-single-prices">
    								<span class="price">
    									$ {{$product->price}}
    								</span>
    							</div>
                  <br>
    							<div class="product-description des">
    								<p>{{$product->penjelasan}}</p>
    							</div>

    							<!-- form add to cart -->
    							<form id="AddToCartForm" enctype="multipart/form-data" method="post" action="/cart/add">
    				        <div class="product-signle-options clearfix">
    					         <div class="selector-wrapper size">
    					       	   <label>Size :</label>
  		                	 <select class="single-option-selector">
  	                		    <option>--Select option--</option>
  			                		<option value="S">S</option>
  			                		<option value="M">M</option>
  			                		<option value="L">L</option>
    					           		<option value="XL">XL</option>
    					          	</select>
    					         </div>

    				        </div>
    				        <div class="product-single-action">
    				          <div class="action add-to-cart">
    										<a href="{{route('cart.edit',['id'=>$product->id]) }}">
    											Add to cart
    										</a>
    									</div>
    				        </div>
    				      </form>
    				      <!-- End form -->
    						</div>
    						<!-- end product-shop -->
    					</div>
    				</div>
    			</div>
    		</div>
        <br><br><br>
    		<!-- end product single -->
      </div>
    </div>
  </div>
@endsection
