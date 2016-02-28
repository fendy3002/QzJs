@extends('master')

<?php $title = 'Browser Shortcut' ?>﻿
@section('title')
    {{ $title }}
@endsection

@section('content')
<div class="row">
    <div class="col-lg-12">
        <h1 class="page-header">{{ $title }}</h1>
    </div>

    <div class="row">

        <div class="col-lg-12">
            <label for="isOverride">Override ?</label> <input class="checkbox checkbox-inline checkbox-lg" type="checkbox" id="isOverride" />
        </div>
    </div>
    <div class="row">
        <ul>
            <li>Ctrl + I to insert!</li>
            <li>Ctrl + N to new!</li>
            <li>Ctrl + O to open!</li>
            <li>Ctrl + S to save!</li>
            <li>F1</li>
            <li>F2</li>
            <li>F3</li>
            <li>F4</li>
        </ul>
    </div>
</div>
@endsection

@section('scripts')
    <script type="text/javascript">
        $(function () {
            $("#isOverride").on("change", function () {
                Qz.Context.overrideBrowserShortcut($(this).prop("checked"));
            });
            $("#isOverride").prop("checked", Qz.Context.overrideBrowserShortcut());

            Qz.Web.surpressBrowserShortcut();

            Qz.Web.globalKeyUp(function (e) {
                if (Qz.Context.overrideBrowserShortcut()) {
                    /*
                    if (e.ctrlKey && e.keyCode == 70) { // ctrlF
                        alert("Find!");
                    }
                    else if (e.ctrlKey && e.keyCode == 82) { // ctrlR
                        alert("Refresh!");
                    }
                    */
                    if (e.ctrlKey && e.keyCode == 73) { // ctrlI
                        alert("Insert!");
                    }
                    else if (e.ctrlKey && e.keyCode == 78) { // ctrlN
                        alert("New!");
                    }
                    else if (e.ctrlKey && e.keyCode == 79) { // ctrlO
                        alert("Open!");
                    }
                    else if (e.ctrlKey && e.keyCode == 83) { // ctrlS
                        alert("Save!");
                    }
                    else if (e.keyCode == 112) { // F1
                        alert("F1!");
                    }
                    else if (e.keyCode == 113) { // F2
                        alert("F2!");
                    }
                    else if (e.keyCode == 114) { // F3
                        alert("F3!");
                    }
                    else if (e.keyCode == 115) { // F4
                        alert("F4!");
                    }
                }
            });
        });
    </script>
@endsection
