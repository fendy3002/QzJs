@extends('master')

<?php $title = 'Browser Shortcut Configurable' ?>﻿
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
            <li><input class="checkbox checkbox-inline checkbox-lg" type="checkbox" data-role="config" value="ctrlF" /> Ctrl + F to Find!</li>
            <li><input class="checkbox checkbox-inline checkbox-lg" type="checkbox" data-role="config" value="ctrlI" /> Ctrl + I to insert!</li>
            <li><input class="checkbox checkbox-inline checkbox-lg" type="checkbox" data-role="config" value="ctrlN" /> Ctrl + N to new!</li>
            <li><input class="checkbox checkbox-inline checkbox-lg" type="checkbox" data-role="config" value="ctrlO" /> Ctrl + O to open!</li>
            <li><input class="checkbox checkbox-inline checkbox-lg" type="checkbox" data-role="config" value="ctrlR" /> Ctrl + R to refresh!</li>
            <li><input class="checkbox checkbox-inline checkbox-lg" type="checkbox" data-role="config" value="ctrlS" /> Ctrl + S to save!</li>
            <li><input class="checkbox checkbox-inline checkbox-lg" type="checkbox" data-role="config" value="f1" /> F1</li>
            <li><input class="checkbox checkbox-inline checkbox-lg" type="checkbox" data-role="config" value="f2" /> F2</li>
            <li><input class="checkbox checkbox-inline checkbox-lg" type="checkbox" data-role="config" value="f3" /> F3</li>
            <li><input class="checkbox checkbox-inline checkbox-lg" type="checkbox" data-role="config" value="f4" /> F4</li>
        </ul>
    </div>
</div>
@endsection

@section('scripts')
    <script type="text/javascript">
        var option = {
            ctrlF: false,
            ctrlI: true,
            ctrlN: true,
            ctrlO: true,
            ctrlR: false,
            ctrlS: true,
            f1: true,
            f2: true,
            f3: true,
            f4: true
        };
        $(function () {
            $("#isOverride").on("change", function () {
                Qz.Context.overrideBrowserShortcut($(this).prop("checked"));
            });
            $("#isOverride").prop("checked", Qz.Context.overrideBrowserShortcut());

            $("input[data-role='config']").on("change", function (e) {
                var field = $(this).val();
                option[field] = $(this).prop("checked");
                Qz.Web.surpressBrowserShortcut(option);
            });

            $("input[data-role='config']").each(function () {
                var field = $(this).val();
                $(this).prop("checked", option[field]);
            });

            Qz.Web.surpressBrowserShortcut(option);
            Qz.Web.globalKeyUp(function (e) {
                if (Qz.Context.overrideBrowserShortcut()) {
                    if (option.ctrlF && e.ctrlKey && e.keyCode == 70) {
                        alert("Find!");
                    }
                    else if (option.ctrlI && e.ctrlKey && e.keyCode == 73) {
                        alert("Insert!");
                    }
                    else if (option.ctrlN && e.ctrlKey && e.keyCode == 78) {
                        alert("New!");
                    }
                    else if (option.ctrlO && e.ctrlKey && e.keyCode == 79) {
                        alert("Open!");
                    }
                    else if (option.ctrlR && e.ctrlKey && e.keyCode == 82) {
                        alert("Refresh!");
                    }
                    else if (option.ctrlS && e.ctrlKey && e.keyCode == 83) {
                        alert("Save!");
                    }
                    else if (option.f1 && e.keyCode == 112) {
                        alert("F1!");
                    }
                    else if (option.f2 && e.keyCode == 113) {
                        alert("F2!");
                    }
                    else if (option.f3 && e.keyCode == 114) {
                        alert("F3!");
                    }
                    else if (option.f4 && e.keyCode == 114) {
                        alert("F4!");
                    }
                }
            });
        });
    </script>
@endsection
