@extends('master')

<?php $title = 'Numeric' ?>﻿
@section('title')
    {{ $title }}
@endsection

@section('content')
<div class="row">
    <div class="col-lg-12">
        <h1 class="page-header">{{ $title }}</h1>
    </div>
    <!-- /.col-lg-12 -->
    <div class="row">
        <div class="col-xs-6">Normal</div>
        <div class="col-xs-6"><input type="text" name="numeric" class="form-control" /></div>
    </div>
    <div class="row">
        <div class="col-xs-6">Preset value</div>
        <div class="col-xs-6"><input type="text" name="numeric2" class="form-control" value="123456789.123456"/></div>
    </div>
    <div class="row">
        <div class="col-xs-6">Not a number</div>
        <div class="col-xs-6"><input type="text" name="numeric3" class="form-control" value="asdass" /></div>
    </div>
    <div class="row">
        <div class="col-xs-6">Four decimal length</div>
        <div class="col-xs-6"><input type="text" name="numeric4" class="form-control" data-decimal-length="4" value="123456789.123456" /></div>
    </div>
</div>
@endsection

@section('scripts')
    <script type="text/javascript">
        $(function () {
            Qz.Numeric.initInput({
                element: $("input[name='numeric']")
            });
            Qz.Numeric.initInput({
                element: $("input[name='numeric2']")
            });
            Qz.Numeric.initInput({
                element: $("input[name='numeric3']")
            });
            Qz.Numeric.initInput({
                element: $("input[name='numeric4']")
            });
        });
    </script>
@endsection
