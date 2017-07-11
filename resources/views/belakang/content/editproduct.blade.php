@extends('belakang.partials.layout')
@section('link2')
  class="active"
@endsection
@section('content')
  <section class="content">
      <div class="container-fluid">
          <div class="block-header">
            <h1>Edit Product</h1>
            <br>
            <form action="{{ route('product.update',['id' => $product->id ]) }}" method="post" enctype="multipart/form-data">
              {{ csrf_field() }}
              <input type="hidden" name="_method" value="PUT">
              <div class="form-group">
                <label>Product Name</label>
                <input type="text" name="name" class="form-control" required value="{{ $product->name }}">
              </div>
              <div class="form-group">
                <label>Product Detail :</label>
                <input type="text" name="penjelasan" class="form-control" required value="{{ $product->penjelasan }}">
              </div>
              <div class="form-group">
                  <label>Gender :</label>
                  <div class="row clearfix">
                      <div class="col-md-12">
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
                      <div class="col-md-12">
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
                      <div class="col-md-12">
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
                <input type="text" name="price" class="form-control" required value="{{ $product->price }}">
              </div>
              <div class="form-group">
                <label>Photo :</label>
                <input type="file" name="foto" class="form-control" required >
              </div>
            <input type="submit" name="submit" value="Update Product" class="btn btn-success pull-right">
            </form>
            <br><br>
          </div>
      </div>
  </section>
@endsection
