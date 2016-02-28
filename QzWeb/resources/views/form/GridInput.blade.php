@extends('master')

<?php $title = 'Grid Input' ?>﻿
@section('title')
    {{ $title }}
@endsection

@section("content")
<div class="row">
    <div class="col-lg-12">
        <h1 class="page-header">{{ $title }}</h1>
    </div>
    <!-- /.col-lg-12 -->
    <div class="row">
        <div class="col-xs-12">
            <div class="col-xs-12">
                <div class="row">
                    <a class="btn btn-default" id="btnAdd">Add (F3)</a>
                </div>
                <div class="row table-responsive">
                    <table id="tableEmployee" class="table table-condensed datatables_noempty" width="100%">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Age</th>
                                <th>Start date</th>
                                <th>Salary</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tfoot>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Age</th>
                                <th>Start date</th>
                                <th>Salary</th>
                                <th></th>
                            </tr>
                        </tfoot>

                        <tbody data-bind="sortable: {foreach: details, options: {handle: '.sort-handle', animation: 150 }}" class="sort-container">
                            <tr>
                                <td width="64px">
                                    <a class="sort-handle sort-handle-sm"><span class="glyphicon glyphicon-align-justify"></span></a>
                                    <span data-bind="text:$index() + 1"></span>
                                </td>
                                <td><input class="form-control input-sm" /></td>
                                <td><input class="form-control input-sm" /></td>
                                <td><input class="form-control input-sm" /></td>
                                <td><input class="form-control input-sm" /></td>
                                <td><input class="form-control input-sm" /></td>
                                <td><input class="form-control input-sm" /></td>
                                <td><a class="btn btn-danger" data-bind="click:$root.remove"><i class="fa fa-remove"></i></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section("scripts")
    <script type="text/javascript">
        var QzWebTest = {};

        (function (root, $) {
            var detailModel = function (newDetail) {
                var self = this;
                self.addFields(['ReimbursementCategoryCode', 'TransactionDate', 'Currency', 'Remarks',
                    'ToReimbursementCategory.value', 'ToReimbursementCategory.Key',
                    'Personal.Key', 'Personal.Value', 'ReimbursementValue', 'ReimbursementPercentage'
                ])

                self.Amount = ko.computed(function () {
                    var amount = self.ReimbursementValue() * self.ReimbursementPercentage() / 100;
                    if (!isNaN(amount)) {
                        return amount;
                    }
                    else {
                        return "";
                    }
                });

                self.update(newDetail);
            };
            detailModel.prototype = Object.create(Qz.HeaderDetail.detail.prototype, {
                constructor: { value: detailModel }
            });
            var viewModel = new Qz.HeaderDetail.header(detailModel);
            root.viewModel = viewModel;
        }(QzWebTest, jQuery));

        var viewModel = QzWebTest.viewModel;
        $(function () {
            ko.applyBindings(viewModel, $('#example').get(0));

            $("#btnAdd").on("click", function () {
                viewModel.details.push({});
            });
            viewModel.details.push({});


            Qz.Web.surpressBrowserShortcut();

            $("#tableEmployee").on("keyup", function (e) {
                if (e.keyCode == 115) {
                    var activeElement = document.activeElement;
                    var $currentTr = $(activeElement).closest("tr");
                    var nextTr = $currentTr.next().get(0) || $currentTr.prev().get(0);

                    viewModel.details.remove(ko.dataFor(activeElement));
                    if (nextTr && $(nextTr).find("input").length > 0) {
                        $(nextTr).find("input").get(0).focus();
                    }
                }
            });
            Qz.Web.globalKeyUp(function (e) {
                if (e.keyCode == 114) {
                    viewModel.details.push({});
                    $("#tableEmployee").find("tr").last().find("input").get(0).focus();
                }
            });
        });
    </script>
@endsection
