@extends('master')

<?php $title = 'Tab Scope Modal' ?>﻿
@section('title')
    {{ $title }}
@endsection﻿

@section("content")
<div class="row">
    <div class="col-lg-12">
        <h1 class="page-header">{{ $title }}</h1>
    </div>
    <!-- /.col-lg-12 -->

    <div class="row pad-bottom">
        <div class="col-margin-2x">
            This page demonstrate how form tab scope works in modal form.
        </div>
    </div>
    <div class="row">
        <div class="col-margin-2x">
            <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#noTabScopeModal">
                Normal Form
            </button>
            <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#tabScopeModal">
                Form with tabscope
            </button>
        </div>
    </div>

    <form class="form form-horizontal" id="form1">
        <div class="modal" tabindex="-1" role="dialog" id="tabScopeModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">Form with tab scope</h4>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-xs-6 form-group">
                                <div class="col-xs-6">Textbox</div>
                                <div class="col-xs-6"><input type="text" class="form-control" data-tab-first/></div>
                            </div>
                            <div class="col-xs-6 form-group">
                                <div class="col-xs-6">Textbox 2</div>
                                <div class="col-xs-6"><input type="text" class="form-control" /></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-6 form-group">
                                <div class="col-xs-6">Textbox 3</div>
                                <div class="col-xs-6"><input type="text" class="form-control" /></div>
                            </div>
                            <div class="col-xs-6 form-group">
                                <div class="col-xs-6">Textarea</div>
                                <div class="col-xs-6"><textarea class="form-control" rows="8"></textarea></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-6 form-group">
                                <div class="col-xs-6">Checkbox</div>
                                <div class="col-xs-6"><input type="checkbox" class="checkbox-inline checkbox-lg" /></div>
                            </div>
                            <div class="col-xs-6 form-group">
                                <div class="col-xs-6">Textbox 4</div>
                                <div class="col-xs-6"><input type="text" class="form-control" data-tab-last/></div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->
    </form>



    <div class="modal" tabindex="-1" role="dialog" id="noTabScopeModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Form without tab scope</h4>
                </div>
                <div class="modal-body">
                    <form class="form form-horizontal" id="form2">
                        <div class="row">
                            <div class="col-xs-6">
                                <div class="col-xs-6">Textbox</div>
                                <div class="col-xs-6"><input type="text" class="form-control" /></div>
                            </div>
                            <div class="col-xs-6">
                                <div class="col-xs-6">Textbox 2</div>
                                <div class="col-xs-6"><input type="text" class="form-control" /></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-6">
                                <div class="col-xs-6">Textbox 3</div>
                                <div class="col-xs-6"><input type="text" class="form-control" /></div>
                            </div>
                            <div class="col-xs-6">
                                <div class="col-xs-6">Textarea</div>
                                <div class="col-xs-6"><textarea class="form-control" rows="8"></textarea></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-6">
                                <div class="col-xs-6">Checkbox</div>
                                <div class="col-xs-6"><input type="checkbox" class="checkbox-inline checkbox-lg" /></div>
                            </div>
                            <div class="col-xs-6">
                                <div class="col-xs-6">Textbox 4</div>
                                <div class="col-xs-6"><input type="text" class="form-control" /></div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

</div>
@endsection﻿

@section("scripts")
    <script type="text/javascript">
        $(function () {
            Qz.Web.scopeTab(document.getElementById("form1"));
        });
    </script>
@endsection
