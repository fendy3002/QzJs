@extends('master')

<?php $title = 'Caret Position' ?>﻿
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
        <div class="col-xs-6"><input type="text" class="form-control" id="inputCaret" /></div>
        <div class="col-xs-3">Caret Position: <span id="caretInfo"></span></div>
        <div class="col-xs-3">Length: <span id="lengthInfo"></span></div>
    </div>
</div>
@endsection

@section('scripts')
    <script type="text/javascript">
        $(function () {
            $("#inputCaret").on("keyup", function () {
                var position = Qz.Web.getCaretPosition(this);
                var length = this.value.length;
                $("#caretInfo").text(position);
                $("#lengthInfo").text(length);
            });
        });
    </script>
@endsection
