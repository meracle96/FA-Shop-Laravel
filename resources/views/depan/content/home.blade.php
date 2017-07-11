@extends('depan.partials.layout')
@section('content')
  <div id="content">
    <div class="banner-slider" style="margin-bottom:50px;">
      <div class="wrap-item">
        <div class="item" style='background:url("images/home12/banner1.jpg") no-repeat center top'>
          <img class="img-responsive" src="images/home12/banner1.jpg" alt="" />
          <div class="item-info-banner style-special">
            <h2>Canifa Collection</h2>
            <h4>Lorem ipsum dolor amet consectetur</h4>
            <label>Autumn 2016</label>
            <strong class="saleoff-banner">60 <span>% OFF</span></strong>
            <a href="/all">Go Shop</a>
          </div>
        </div>
        <div class="item" style='background:url("images/home12/banner2.jpg") no-repeat center top'>
          <img class="img-responsive" src="images/home12/banner2.jpg" alt="" />
          <div class="item-info-banner style-special">
            <h2>london fashion</h2>
            <h4>Lorem ipsum dolor amet consectetur</h4>
            <label>Summner 2016</label>
            <strong class="saleoff-banner">50 <span>% OFF</span></strong>
            <a href="/all">Shop women</a>
          </div>
        </div>
        <div class="item" style='background:url("images/home12/banner3.jpg") no-repeat center top'>
          <img class="img-responsive" src="images/home12/banner3.jpg" alt="" />
          <div class="item-info-banner style-normal">
            <h3><label>It’s my style</label></h3>
            <h2>Fashion Clothing</h2>
            <h3>Affordable design, Useable creativity</h3>
            <a href="/all">Shop women</a>
          </div>
        </div>
      </div>
    </div>
    <!-- End Banner Slider -->

    <div class="product-list-category-slider">
      <div class="container">
        <div class="title-tab-product-category">
          <h1>New Product</h1>
          <br>
          <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active"><a href="#men" aria-controls="men" role="tab" data-toggle="tab">Men</a></li>
            <li role="presentation"><a href="#women" aria-controls="women" role="tab" data-toggle="tab">Women</a></li>
            <li role="presentation"><a href="#kid" aria-controls="kid" role="tab" data-toggle="tab">Kid</a></li>
          </ul>
        </div>
        <div class="row">
          <div class="col-md-3 col-sm-3 col-xs-12">
            <div class="category-adv-slider single-slider single-arrow">
              <h2 class="title-slider">On Sale</h2>
              <div class="wrap-item">
                <div class="item">
                  <div class="item-category-adv">
                    <a href="#" class="item-category-adv-link"><img src="images/home12/cat1.png" alt="" /></a>
                    <p class="desc">Welcome to the world of fashion. We are proud to present. You can now adjust price </p>
                    <a href="/all" class="readmore">Shop Now</a>
                  </div>
                </div>
                <div class="item">
                  <div class="item-category-adv">
                    <a href="#" class="item-category-adv-link"><img src="images/home12/cat2.png" alt="" /></a>
                    <p class="desc">Welcome to the world of fashion. We are proud to present. You can now adjust price </p>
                    <a href="#" class="readmore">Shop Now</a>
                  </div>
                </div>
                <div class="item">
                  <div class="item-category-adv">
                    <a href="#" class="item-category-adv-link"><img src="images/home12/cat3.png" alt="" /></a>
                    <p class="desc">Welcome to the world of fashion. We are proud to present. You can now adjust price </p>
                    <a href="#" class="readmore">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-9 col-sm-9 col-xs-12">
            <div class="content-tab-product-category single-arrow">
              <!-- Tab panes -->
              <div class="tab-content">

                <div role="tabpanel" class="tab-pane active" id="men">
                  <div class="wrap-item">
                    @foreach ($mens as $men)
                    <div class="item">
                      <div class="item-product">
                        <div class="item-product-thumb">
                          <a href="{{route('depan.mens.show',['id'=>$men->id])}}"><img src="{{asset('uploads/products')}}/{{$men->foto}}" alt="" /></a>
                        </div>
                        <div class="item-product-info">
                          <h3 class="title-product"><a href="{{route('depan.mens.show',['id'=>$men->id])}}">{{$men->name}}</a></h3>
                          <div class="info-product-price">
                            <span>${{$men->price}}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    @endforeach
                  </div>
                </div>

                <div role="tabpanel" class="tab-pane" id="women">
                  <div class="wrap-item">
                    @foreach ($womens as $women)
                    <div class="item">
                      <div class="item-product">
                        <div class="item-product-thumb">
                          <a href="{{route('depan.mens.show',['id'=>$women->id])}}"><img src="{{asset('uploads/products')}}/{{$women->foto}}" alt="" /></a>
                        </div>
                        <div class="item-product-info">
                          <h3 class="title-product"><a href="{{route('depan.mens.show',['id'=>$women->id])}}">{{$women->name}}</a></h3>
                          <div class="info-product-price">
                            <span>${{$women->price}}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    @endforeach
                  </div>
                </div>

                <div role="tabpanel" class="tab-pane" id="kid">
                  <div class="wrap-item">
                    @foreach ($kids as $kid)
                    <div class="item">
                      <div class="item-product">
                        <div class="item-product-thumb">
                          <a href="{{route('depan.mens.show',['id'=>$kid->id])}}"><img src="{{asset('uploads/products')}}/{{$kid->foto}}" alt="" /></a>
                        </div>
                        <div class="item-product-info">
                          <h3 class="title-product"><a href="{{route('depan.mens.show',['id'=>$kid->id])}}">{{$kid->name}}</a></h3>
                          <div class="info-product-price">
                            <span>${{$kid->price}}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    @endforeach
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Category Slider -->

    <div class="box-service">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="intro-service-box">
              <h2>MORE FEATURES OF</h2>
              <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque unde omnis iste natus error sit.</p>
              <a href="#">Go Shop</a>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="list-service-box">
              <div class="item-service-box">
                <div class="icon-service-box yellow">
                  <a href="#"><i class="fa fa-scissors"></i></a>
                </div>
                <div class="info-service-box">
                  <h3><a href="#">design & cutting</a></h3>
                  <p>Perspiciatis unde omnis iste natus error sit voluptatem accu santium doloremque unde omnis iste natus error sit</p>
                </div>
              </div>
              <div class="item-service-box">
                <div class="icon-service-box blue">
                  <a href="#"><i class="fa fa-stack-overflow"></i></a>
                </div>
                <div class="info-service-box">
                  <h3><a href="#">Garment processing</a></h3>
                  <p>Perspiciatis unde omnis iste natus error sit voluptatem accu santium doloremque unde omnis iste natus error sit</p>
                </div>
              </div>
              <div class="item-service-box">
                <div class="icon-service-box red">
                  <a href="#"><i class="fa fa-slack"></i></a>
                </div>
                <div class="info-service-box">
                  <h3><a href="#">finished products</a></h3>
                  <p>Perspiciatis unde omnis iste natus error sit voluptatem accu santium doloremque unde omnis iste natus error sit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End List Service -->
    
    <div class="service-support">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="item-service-support">
              <a href="#"><i class="fa fa-exchange"></i> 30 DAYS EXCHANGE POLICY</a>
            </div>
          </div>
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="item-service-support">
              <a href="#"><i class="fa fa-truck"></i> FREE SHIPPING OVER $100</a>
            </div>
          </div>
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="item-service-support">
              <a href="#"><i class="fa fa-phone"></i> 24/7 ONLINE SUPPORT</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Service Support -->
    <div class="list-brand single-arrow">
      <div class="container">
        <div class="wrap-item">
          <div class="item">
            <div class="item-brand">
              <a href="#"><img src="images/home12/brand1.png" alt="" /></a>
            </div>
          </div>
          <div class="item">
            <div class="item-brand">
              <a href="#"><img src="images/home12/brand2.png" alt="" /></a>
            </div>
          </div>
          <div class="item">
            <div class="item-brand">
              <a href="#"><img src="images/home12/brand3.png" alt="" /></a>
            </div>
          </div>
          <div class="item">
            <div class="item-brand">
              <a href="#"><img src="images/home12/brand4.png" alt="" /></a>
            </div>
          </div>
          <div class="item">
            <div class="item-brand">
              <a href="#"><img src="images/home12/brand1.png" alt="" /></a>
            </div>
          </div>
          <div class="item">
            <div class="item-brand">
              <a href="#"><img src="images/home12/brand2.png" alt="" /></a>
            </div>
          </div>
          <div class="item">
            <div class="item-brand">
              <a href="#"><img src="images/home12/brand3.png" alt="" /></a>
            </div>
          </div>
          <div class="item">
            <div class="item-brand">
              <a href="#"><img src="images/home12/brand4.png" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Partner -->
  </div>
@endsection
