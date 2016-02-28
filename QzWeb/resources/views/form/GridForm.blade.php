@extends('master')

<?php $title = 'Grid Form' ?>﻿
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
        <div class="col-xs-12">
            <div class="col-xs-12">
                <div class="row pad-bottom">
                    <a class="btn btn-default" id="btnAdd">Add (CTRL + I)</a>
                    <a class="btn btn-default" id="btnEdit">Edit (F2)</a>
                </div>
                <div class="row">
                    <table id="example" class="table datatables_noempty" width="100%">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Age</th>
                                <th>Start date</th>
                                <th>Salary</th>
                            </tr>
                        </thead>

                        <tfoot>
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Age</th>
                                <th>Start date</th>
                                <th>Salary</th>
                            </tr>
                        </tfoot>

                        <tbody data-bind="foreach: details" class="sort-container">
                            <tr>
                                <td>Tiger Nixon</td>
                                <td>System Architect</td>
                                <td>Edinburgh</td>
                                <td>61</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                            </tr>
                            <tr>
                                <td>Garrett Winters</td>
                                <td>Accountant</td>
                                <td>Tokyo</td>
                                <td>63</td>
                                <td>2011/07/25</td>
                                <td>$170,750</td>
                            </tr>
                            <tr>
                                <td>Ashton Cox</td>
                                <td>Junior Technical Author</td>
                                <td>San Francisco</td>
                                <td>66</td>
                                <td>2009/01/12</td>
                                <td>$86,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>


    <div class="modal" tabindex="-1" role="dialog" id="modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Form</h4>
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
@endsection

@section("scripts")
    <script type="text/javascript">
        var add = function () {
            $("#modal").modal('show');
            $("#modal").find("input").eq(0).val("");
        };
        var edit = function () {
            var focusedRow = table.cell({ focused: true }).indexes()[0].row;
            if (focusedRow >= 0) {
                var data = table.cell(focusedRow, 0).data();

                $("#modal").modal('show');
                $("#modal").find("input").eq(0).val(data);
            }
        };

        $(function () {
            //ko.applyBindings(viewModel, $('#example').get(0));
            window.table = $('#example').DataTable({
                keys: true
            });

            $("#btnAdd").on("click", function () {
                add();
            });
            $("#btnEdit").on("click", function () {
                edit();
            });


            Qz.Web.surpressBrowserShortcut();
            Qz.Web.globalKeyUp(function (e) {
                if (Qz.Context.overrideBrowserShortcut()) {
                    if (e.ctrlKey && e.keyCode == 73) {
                        add();
                    }
                    if (e.keyCode == 113) {
                        edit();
                    }
                }
            });
        });
    </script>
@endsection
