<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>@section('title')
        SB Admin 2 - Bootstrap Admin Theme
    @show</title>

    <!-- Bootstrap Core CSS -->
    <link rel="stylesheet" href="{!! asset('/') !!}public/css/bootstrap.min.css" />

    <!-- MetisMenu CSS -->
    <link rel="stylesheet" href="{!! asset("/") !!}public/css/metisMenu.min.css" />

    <!-- Select2 CSS -->
    <link rel="stylesheet" href="{!! asset("/") !!}public/css/select2.min.css" />
    <link rel="stylesheet" href="{!! asset("/") !!}public/css/select2-bootstrap.min.css" />

    <!-- Custom CSS -->
    <link rel="stylesheet" href="{!! asset("/") !!}public/css/sb-admin-2.css" />
    <link rel="stylesheet" href="{!! asset("/") !!}public/css/qzjs/qzjs.css" />

    <!-- Custom Fonts -->
    <link rel="stylesheet" href="{!! asset("/") !!}public/css/font-awesome.min.css" />

    <!-- Data Tables -->
    <link rel="stylesheet" href="{!! asset("/") !!}public/css/datatables/css/jquery.datatables.min.css" />
    <link rel="stylesheet" href="{!! asset("/") !!}public/css/datatables/css/datatables.bootstrap.min.css" />
    <link rel="stylesheet" href="{!! asset("/") !!}public/css/datatables/css/keyTable.dataTables.min.css" />
    <link rel="stylesheet" href="{!! asset("/") !!}public/css/datatables/css/keyTable.bootstrap.min.css" />

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>

    <!-- Navigation -->
    <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="{!! url('/') !!}">QzJs Integrated Test</a>
            <button id="menuToggle" class="btn btn-default"><i class="fa fa-bars"></i></button>
        </div>
        <!-- /.navbar-header -->
        <ul class="nav navbar-top-links navbar-right">
            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                    <i class="fa fa-envelope fa-fw"></i>  <i class="fa fa-caret-down"></i>
                </a>
                <ul class="dropdown-menu dropdown-messages">
                    <li>
                        <a href="#">
                            <div>
                                <strong>John Smith</strong>
                                <span class="pull-right text-muted">
                                    <em>Yesterday</em>
                                </span>
                            </div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                        </a>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <a href="#">
                            <div>
                                <strong>John Smith</strong>
                                <span class="pull-right text-muted">
                                    <em>Yesterday</em>
                                </span>
                            </div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                        </a>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <a href="#">
                            <div>
                                <strong>John Smith</strong>
                                <span class="pull-right text-muted">
                                    <em>Yesterday</em>
                                </span>
                            </div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                        </a>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <a class="text-center" href="#">
                            <strong>Read All Messages</strong>
                            <i class="fa fa-angle-right"></i>
                        </a>
                    </li>
                </ul>
                <!-- /.dropdown-messages -->
            </li>
            <!-- /.dropdown -->
            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                    <i class="fa fa-tasks fa-fw"></i>  <i class="fa fa-caret-down"></i>
                </a>
                <ul class="dropdown-menu dropdown-tasks">
                    <li>
                        <a href="#">
                            <div>
                                <p>
                                    <strong>Task 1</strong>
                                    <span class="pull-right text-muted">40% Complete</span>
                                </p>
                                <div class="progress progress-striped active">
                                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                                        <span class="sr-only">40% Complete (success)</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <a href="#">
                            <div>
                                <p>
                                    <strong>Task 2</strong>
                                    <span class="pull-right text-muted">20% Complete</span>
                                </p>
                                <div class="progress progress-striped active">
                                    <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
                                        <span class="sr-only">20% Complete</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <a href="#">
                            <div>
                                <p>
                                    <strong>Task 3</strong>
                                    <span class="pull-right text-muted">60% Complete</span>
                                </p>
                                <div class="progress progress-striped active">
                                    <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
                                        <span class="sr-only">60% Complete (warning)</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <a href="#">
                            <div>
                                <p>
                                    <strong>Task 4</strong>
                                    <span class="pull-right text-muted">80% Complete</span>
                                </p>
                                <div class="progress progress-striped active">
                                    <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
                                        <span class="sr-only">80% Complete (danger)</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <a class="text-center" href="#">
                            <strong>See All Tasks</strong>
                            <i class="fa fa-angle-right"></i>
                        </a>
                    </li>
                </ul>
                <!-- /.dropdown-tasks -->
            </li>
            <!-- /.dropdown -->
            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                    <i class="fa fa-bell fa-fw"></i>  <i class="fa fa-caret-down"></i>
                </a>
                <ul class="dropdown-menu dropdown-alerts">
                    <li>
                        <a href="#">
                            <div>
                                <i class="fa fa-comment fa-fw"></i> New Comment
                                <span class="pull-right text-muted small">4 minutes ago</span>
                            </div>
                        </a>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <a href="#">
                            <div>
                                <i class="fa fa-twitter fa-fw"></i> 3 New Followers
                                <span class="pull-right text-muted small">12 minutes ago</span>
                            </div>
                        </a>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <a href="#">
                            <div>
                                <i class="fa fa-envelope fa-fw"></i> Message Sent
                                <span class="pull-right text-muted small">4 minutes ago</span>
                            </div>
                        </a>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <a href="#">
                            <div>
                                <i class="fa fa-tasks fa-fw"></i> New Task
                                <span class="pull-right text-muted small">4 minutes ago</span>
                            </div>
                        </a>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <a href="#">
                            <div>
                                <i class="fa fa-upload fa-fw"></i> Server Rebooted
                                <span class="pull-right text-muted small">4 minutes ago</span>
                            </div>
                        </a>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <a class="text-center" href="#">
                            <strong>See All Alerts</strong>
                            <i class="fa fa-angle-right"></i>
                        </a>
                    </li>
                </ul>
                <!-- /.dropdown-alerts -->
            </li>
            <!-- /.dropdown -->
            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                    <i class="fa fa-user fa-fw"></i>  <i class="fa fa-caret-down"></i>
                </a>
                <ul class="dropdown-menu dropdown-user">
                    <li>
                        <a href="#"><i class="fa fa-user fa-fw"></i> User Profile</a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-gear fa-fw"></i> Settings</a>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <a href="login.html"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
                    </li>
                </ul>
                <!-- /.dropdown-user -->
            </li>
            <!-- /.dropdown -->
        </ul>
        <!-- /.navbar-top-links -->

        <div class="navbar-default sidebar" role="navigation">
            @include("sidebar")
        </div>
        <!-- /.navbar-static-side -->
    </nav>

    <div id="wrapper">
        <div id="page-wrapper">
            @section('content')
            @show
            <div style="height:60px;"></div>
        </div>
        <!-- /#page-wrapper -->
    </div>
    <!-- /#wrapper -->

    <footer class="dark">
        <div>Footer this is </div>
    </footer>

    <!-- jQuery -->
	<script src="{!! asset('/'); !!}public/js/jquery-2.1.4.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
	<script src="{!! asset('/'); !!}public/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
	<script src="{!! asset('/'); !!}public/js/metisMenu.min.js"></script>


    <!-- Datatable JavaScript -->
	<script src="{!! asset('/'); !!}public/js/jquery.dataTables.min.js"></script>
	<script src="{!! asset('/'); !!}public/js/dataTables.bootstrap.min.js"></script>
	<script src="{!! asset('/'); !!}public/js/datatables/dataTables.keyTable.min.js"></script>

    <!-- Bxslider JavaScript -->
	<script src="{!! asset('/'); !!}public/js/jquery.bxslider.min.js"></script>

    <!-- Select2 JavaScript -->
	<script src="{!! asset('/'); !!}public/js/select2/select2.min.js"></script>

    <!-- knockout JavaScript -->
	<script src="{!! asset('/'); !!}public/js/knockout-3.1.0.js"></script>

    <!-- Custom Theme JavaScript -->
	<script src="{!! asset('/'); !!}public/js/sb-admin-2.js"></script>

    <!-- Sortable JavaScript -->
	<script src="{!! asset('/'); !!}public/js/rubaxa/rubaxa-sortable.js"></script>
	<script src="{!! asset('/'); !!}public/js/rubaxa/knockout-sortable.js"></script>

    <!-- QzJs -->
	<script src="{!! asset('/'); !!}public/js/qzjs/object.js"></script>

	<script src="{!! asset('/'); !!}public/js/qzjs/context.js"></script>
	<script src="{!! asset('/'); !!}public/js/qzjs/format.js"></script>
	<script src="{!! asset('/'); !!}public/js/qzjs/collection.js"></script>
	<script src="{!! asset('/'); !!}public/js/qzjs/func.js"></script>
	<script src="{!! asset('/'); !!}public/js/qzjs/math.js"></script>
	<script src="{!! asset('/'); !!}public/js/qzjs/linq.js"></script>
	<script src="{!! asset('/'); !!}public/js/qzjs/string.js"></script>
	<script src="{!! asset('/'); !!}public/js/qzjs/url.js"></script>
	<script src="{!! asset('/'); !!}public/js/qzjs/web.js"></script>
	<script src="{!! asset('/'); !!}public/js/qzjs/z.js"></script>
	<script src="{!! asset('/'); !!}public/js/qzjs/ko-header-detail.js"></script>
	<script src="{!! asset('/'); !!}public/js/qzjs/numeric.js"></script>
	<script>
		$(function(){
			Qz.Web.sbAdminCollapsible($("#menuToggle"));
		});
	</script>

    @section('scripts')
    @show
</body>

</html>
