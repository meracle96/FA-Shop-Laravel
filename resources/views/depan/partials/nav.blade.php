<div id="header" style="margin:0; padding:0;">
  <div class="top-header">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-6 col-xs-12">
          <div class="top-support">
          </div>
        </div>
        <div class="col-md-6 col-sm-6 col-xs-12">
          <div class="top-info">
            <ul class="list-inline text-right">
              @if (Auth::check())
                <li><a href="#" class="top-info-link"><i class="fa fa-user"></i> {{ Auth::user()->name }}</a></li>
                <li>
                    <a href="{{ route('logout') }}"
                    onclick="event.preventDefault();
                    document.getElementById('logout-form').submit();"
                    class="top-info-link">
                    <i class="fa fa-sign-out"></i> Logout
                  </a>

                  <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                    {{ csrf_field() }}
                  </form>
                </li>
              @else
                <li><a href="/login" class="top-info-link">Login</a></li>
                <li><a href="/register" class="top-info-link">Register</a></li>
              @endif
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="main-header">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-4 col-xs-12">
          <div class="logo">
            <a href="/"><img src="{{ asset('images/home12/logo.png') }}" alt="" /></a>
          </div>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-12">
          <div class="phone-info">
            <label>Call Us Now</label>
            <h2 class="phone-number">Toll free : (+00) 66 55 819</h2>
          </div>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-12">
          <div class="top-cart">
            <h2><a href="{{route('cart.index')}}" style="color:white;">shopping Cart</a></h2>
            <p>{{Cart::count()}} Item(s) - ${{Cart::subtotal()}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="header-nav">
    <div class="container">
      <div class="row">
        <div class="col-md-9 col-sm-9 col-xs-12">
          <div class="main-nav">
            <ul>
              <li><a href="/">Home </a></li>
              <li class="menu-item-has-children"><a href="/mens">Mens</a></li>
              <li class="menu-item-has-children"><a href="/womens">Womens</a></li>
              <li class="menu-item-has-children"><a href="/kids">Kids</a></li>
              <li class="menu-item-has-children"><a href="/all">All Products</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-3 col-sm-3 col-xs-12">

        </div>
      </div>
    </div>
  </div>
</div>
