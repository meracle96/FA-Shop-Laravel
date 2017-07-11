@extends('belakang.partials.layout')
@section('link2')
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
                              Manage Product
                          </h2>
                          <br>
                          <!-- Trigger the modal with a button -->
                          <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">Add Product</button>

                          <!-- Modal -->
                          <div id="myModal" class="modal fade" role="dialog">
                            <div class="modal-dialog">

                              <!-- Modal content-->
                              <div class="modal-content">
                                <div class="modal-header">
                                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                                  <h4 class="modal-title">Add Product</h4>
                                </div>
                                <div class="modal-body">
                                  <form action="{{ route('product.store') }}" method="post" enctype="multipart/form-data">
                                    {{ csrf_field() }}
                                    <div class="form-group">
                                      <label>Product Name</label>
                                      <input type="text" name="name" class="form-control" required style="border-bottom:1px solid grey;">
                                    </div>
                                    <div class="form-group">
                                      <label>Product Detail :</label>
                                      <input type="text" name="penjelasan" class="form-control" required style="border-bottom:1px solid grey;">
                                    </div>
                                    <div class="form-group">
                                        <label>Gender :</label>
                                        <div class="row clearfix">
                                            <div class="col-md-8">
                                                <select class="form-control show-tick" name="gender_id" required>
                                                    <option value="">-- Choose One --</option>
                                                    @foreach ($genders as $gender)
                                                      <option value="{{ $gender->id }}">{{ $gender->name }}</option>
                                                    @endforeach
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Product Category :</label>
                                        <div class="row clearfix">
                                            <div class="col-md-8">
                                                <select class="form-control show-tick" name="kategori_id" required>
                                                    <option value="">-- Choose One --</option>
                                                    @foreach ($kategoris as $kategori)
                                                      <option value="{{ $kategori->id }}">{{ $kategori->name }}</option>
                                                    @endforeach
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Product Size :</label>
                                        <div class="row clearfix">
                                            <div class="col-md-8">
                                                <select class="form-control show-tick" name="size" required>
                                                    <option value="">-- Choose One --</option>
                                                    @foreach ($sizes as $size)
                                                      <option value="{{ $size->id }}">{{ $size->name }}</option>
                                                    @endforeach
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                      <label>Price :</label>
                                      <input type="text" name="price" class="form-control" required style="border-bottom:1px solid grey;">
                                    </div>
                                    <div class="form-group">
                                      <label>Photo :</label>
                                      <input type="file" name="foto" class="form-control" required style="border-bottom:1px solid grey;">
                                    </div>
                                </div>
                                <div class="modal-footer">
                                  <input type="submit" name="submit" value="Add Product" class="btn btn-success">
                                  </form>
                                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                              </div>

                            </div>
                          </div>
                          <ul class="header-dropdown m-r--5">
                              <li class="dropdown">
                                  <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                      <i class="material-icons">more_vert</i>
                                  </a>
                                  <ul class="dropdown-menu pull-right">
                                      <li><a href="javascript:void(0);">Action</a></li>
                                      <li><a href="javascript:void(0);">Another action</a></li>
                                      <li><a href="javascript:void(0);">Something else here</a></li>
                                  </ul>
                              </li>
                          </ul>
                      </div>
                      <div class="body">
                          <table class="table table-bordered table-striped table-hover dataTable js-exportable">
                              <thead>
                                  <tr>
                                      <th>Name</th>
                                      <th>Detail</th>
                                      <th>Gender</th>
                                      <th>Category</th>
                                      <th>Size</th>
                                      <th>Price</th>
                                      <th>Edit</th>
                                      <th>Delete</th>
                                  </tr>
                              </thead>
                              <tbody>
                                @foreach ($products as $product)
                                  <tr>
                                    <td>{{ $product->name }}</td>
                                    <td>{{ $product->penjelasan }}</td>
                                    <td>{{ $product->getGender() }}</td>
                                    <td>{{ $product->getKategori() }}</td>
                                    <td><img src="{{asset('uploads/products')}}/{{$product->foto}}" width="100"></td>
                                    <td>${{ $product->price }}</td>
                                    <td><a href="{{ route('product.edit',['id' => $product->id]) }}" class="btn btn-info">Edit</a></td>
                                      <td>
                                        <form action="{{ route('product.destroy',['id'=>$product->id]) }}" method="post">
                                          {{ csrf_field() }}
                                          <input type="hidden" name="_method" value="DELETE">
                                          <input type="submit" class="btn btn-danger" value="Hapus" onclick="hapus();">
                                        </form>
                                      </td>
                                  </tr>
                                @endforeach
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
          <!-- #END# Exportable Table -->
      </div>
  </section>
@endsection
