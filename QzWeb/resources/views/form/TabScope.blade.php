@extends('master')

<?php $title = 'Tab Scope' ?>﻿
@section('title')
    {{ $title }}
@endsection﻿

@section('content')
<div class="row">
    <div class="col-lg-12">
        <h1 class="page-header">{{ $title }}</h1>
    </div>
    <!-- /.col-lg-12 -->

    <div class="row">
        <div class="col-margin-2x">
            This page demonstrate how form tab scope works. The normal tab in website can be seen <a href="@Url.Action("Index", "Form", new { module = "FormTabRegular" })">here</a>. <br />
            The tab has been configured for each form.<br/>
            You can notice that after the last field, the tab start over from the very first field in the form.
        </div>
    </div>

    <div class="row">
        <div class="col-margin">
            <div class="row">
                <div class="col-margin-2x">
                    <h3>Form 1</h3>
                    <hr />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <form class="form form-horizontal" id="form1">
                        <div class="row">
                            <div class="col-xs-6 form-group">
                                <label class="col-xs-4 control-label">Textbox</label>
                                <div class="col-xs-8"><input type="text" class="form-control" data-tab-first/></div>
                            </div>
                            <div class="col-xs-6 form-group">
                                <label class="col-xs-4 control-label">Textbox 2</label>
                                <div class="col-xs-8"><input type="text" class="form-control" /></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-6 form-group">
                                <label class="col-xs-4 control-label">Numeric</label>
                                <div class="col-xs-8"><input type="text" class="form-control" data-numeric/></div>
                            </div>
                            <div class="col-xs-6 form-group">
                                <label class="col-xs-4 control-label">Textarea</label>
                                <div class="col-xs-8"><textarea class="form-control" rows="8"></textarea></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-6 form-group">
                                <label class="col-xs-4 control-label">Checkbox</label>
                                <div class="col-xs-8"><input type="checkbox" class="checkbox-inline checkbox-lg" /></div>
                            </div>
                            <div class="col-xs-6 form-group">
                                <label class="col-xs-4 control-label">Combobox</label>
                                <div class="col-xs-8">
                                    <select class="form-control" data-tab-last>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                        <option>Option 4</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <hr class="darker-2x"/>
    <div class="row">
        <div class="col-margin">
            <div class="row">
                <div class="col-margin-2x">
                    <h3>Select2 Start / End</h3>
                    <hr />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <form class="form form-horizontal" id="form2">
                        <div class="row">
                            <div class="col-xs-6 form-group">
                                <label class="col-xs-4 control-label">Combobox with select2</label>
                                <div class="col-xs-8">
                                    <select class="select form-control" data-tab-first>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                        <option>Option 4</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-xs-6 form-group">
                                <label class="col-xs-4 control-label">Textbox</label>
                                <div class="col-xs-8"><input type="text" class="form-control" /></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-6 form-group">
                                <label class="col-xs-4 control-label">Textbox</label>
                                <div class="col-xs-8"><input type="text" class="form-control" /></div>
                            </div>
                            <div class="col-xs-6 form-group">
                                <label class="col-xs-4 control-label">Combobox with select2</label>
                                <div class="col-xs-8">
                                    <select class="select form-control" data-tab-last>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                        <option>Option 4</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <hr class="darker-2x"/>
    <div class="row">
        <div class="col-margin">
            <div class="row">
                <div class="col-margin-2x">
                    <h3>Numeric Start / End</h3>
                    <hr />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <form class="form form-horizontal" id="form3">
                        <div class="row">
                            <div class="col-xs-6 form-group">
                                <label class="col-xs-4 control-label">Numeric</label>
                                <div class="col-xs-8">
                                    <input type="text" class="form-control" data-numeric data-tab-first />
                                </div>
                            </div>
                            <div class="col-xs-6 form-group">
                                <label class="col-xs-4 control-label">Textbox</label>
                                <div class="col-xs-8"><input type="text" class="form-control" /></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-6 form-group">
                                <label class="col-xs-4 control-label">Textbox</label>
                                <div class="col-xs-8"><input type="text" class="form-control" /></div>
                            </div>
                            <div class="col-xs-6 form-group">
                                <label class="col-xs-4 control-label">Numeric</label>
                                <div class="col-xs-8">
                                    <input type="text" class="form-control" data-numeric data-tab-last/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection﻿

@section("scripts")
    <script type="text/javascript">
        $(function () {
            Qz.Web.scopeTab(document.getElementById("form1"));
            Qz.Web.scopeTab(document.getElementById("form2"));
            Qz.Web.scopeTab(document.getElementById("form3"));

            Qz.Numeric.initInput({
                element: $("input[data-numeric]")
            });

            $(".select").select2();
        });
    </script>
@endsection﻿
