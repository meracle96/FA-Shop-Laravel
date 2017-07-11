<aside id="leftsidebar" class="sidebar">
    <!-- User Info -->
    <div class="user-info">
        <div class="image">
            <img src="{{ asset('../../images/user.png') }}" width="48" height="48" alt="User" />
        </div>
        <div class="info-container">
            <div class="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ Auth::user()->name }}</div>
            <div class="email">{{ Auth::user()->email }}</div>
        </div>
    </div>
    <!-- #User Info -->
    <!-- Menu -->
    <div class="menu">
        <ul class="list">
            <li class="header">MAIN NAVIGATION</li>
            <li @yield('link1')>
                <a href="/admin">
                    <i class="material-icons">home</i>
                    <span>Dashboard</span>
                </a>
            </li>
            <li @yield('link2')>
                <a href="/admin/product">
                    <i class="material-icons">store_mall_directory</i>
                    <span>Manage Product</span>
                </a>
            </li>
            <li @yield('link3')>
                <a href="/admin/pendingorder">
                    <i class="material-icons">gavel</i>
                    <span>Pending Orders</span>
                </a>
            </li>
            <li @yield('link4')>
                <a href="/admin/order">
                    <i class="material-icons">flight_takeoff</i>
                    <span>Success Orders</span>
                </a>
            </li>
            <li class="">
                <a href="{{ route('logout') }}"
                  onclick="event.preventDefault();
                  document.getElementById('logout-form').submit();">
                  <i class="material-icons">exit_to_app</i>
                  <span>Logout</span>
                </a>

                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                  {{ csrf_field() }}
                </form>
            </li>
        </ul>
    </div>
    <!-- #Menu -->
    <!-- Footer -->
    <div class="legal">
        <div class="copyright">
            &copy; 2017 <a href="javascript:void(0);">FA Shop - Admin Panel</a>.
        </div>
        <div class="version">
            <b>Version: </b> 1.0.0
        </div>
    </div>
    <!-- #Footer -->
</aside>
