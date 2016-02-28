@extends('master')

<?php $title = 'Datalist' ?>﻿
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
        <div class="col-xs-6"><input type="text" name="datalist" class="form-control" list="browsers" />

            <datalist id="browsers">
                <option value="Internet Explorer">
                <option value="Firefox">
                <option value="Chrome">
                <option value="Opera">
                <option value="Safari">
            </datalist>
        </div>
    </div>
</div>
@endsection

@section('scripts')
    <script type="text/javascript">

    </script>
@endsection
