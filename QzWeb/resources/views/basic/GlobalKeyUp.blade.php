@extends('master')

<?php $title = 'Global Key Up' ?>﻿
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
        <div class="col-xs-6"><input type="text" class="form-control" id="keyCode" readonly /></div>
    </div>
</div>
@endsection

@section('scripts')
    <script type="text/javascript">
        $(function () {
            Qz.Web.globalKeyUp(function (e) {
                console.log("active element: ");
                console.log($(document.activeElement));
                console.log("e");
                console.log(e);
                $("#keyCode").val("alt: " + e.altKey + ", ctrl: " + e.ctrlKey + ", key code: " + e.keyCode);
            });
            Qz.Web.globalKeyUp(function (e) {
                if (e.ctrlKey && e.keyCode == 13) {
                    alert("Submitted");
                }
            });
        });
    </script>
@endsection
