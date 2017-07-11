@extends('belakang.partials.layout')
@section('link3')
  class="active"
@endsection
@section('content')
  <section class="content">
      <div class="container-fluid">
          <!-- Exportable Table -->
          <div class="row clearfix">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="card">
                      <div class="header">
                          <h2>
                              Pending Order
                          </h2>
                      </div>
                      <br><br>
                      <ul>
                        @foreach ($orders as $order)
                          <li>Order by {{$order->user->name}} , Total Price {{ $order->total }}</li>
                          <table class="table">
                            <tr>
                              <th>Product Name</th>
                              <th>Quantity</th>
                              <th>Price</th>
                            </tr>
                            @foreach ($order->orderItems as $item)
                              <tr>
                                <td>{{ $item->name }}</td>
                                <td>{{ $item->pivot->qty }}</td>
                                <td>{{ $item->pivot->total }}</td>
                              </tr>
                            @endforeach
                          </table>
                          <form action="{{route('admin.acceptorder',['id'=>$order->id])}}" method="post">
                            {{csrf_field()}}
                            <input type="hidden" name="_method" value="PUT">
                            <input type="hidden" name="delivered" value="1">
                            <input type="submit" name="submit" value="Delivered" class="btn btn-success">
                          </form>
                          <br><br><br><br>
                        @endforeach
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </section>
@endsection
