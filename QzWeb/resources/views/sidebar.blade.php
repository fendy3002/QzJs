<div class="sidebar-nav navbar-collapse">
    <ul class="nav" id="side-menu">
        <li class="sidebar-search">
            <div class="input-group custom-search-form">
                <input type="text" class="form-control" placeholder="Search...">
                <span class="input-group-btn">
                    <button class="btn btn-default" type="button">
                        <i class="fa fa-search"></i>
                    </button>
                </span>
            </div>
            <!-- /input-group -->
        </li>
        <li>
            <a href="{!! url('/'); !!}/"><i class="fa fa-home fa-fw"></i> Home</a>
        </li>
        <li>
            <a href="#">Basic<span class="fa arrow"></span></a>
            <ul class="nav nav-second-level">
                <li>
                    <a href="{!! url('/'); !!}/basic/GlobalKeyUp">Global Key Up</a>
                </li>
                <li>
                    <a href="{!! url('/'); !!}/basic/BrowserShortcut">Browser Key Override</a>
                </li>
                <li>
                    <a href="{!! url('/'); !!}/basic/BrowserShortcutConfigurable">Browser Key Configurable</a>
                </li>
                <li>
                    <a href="{!! url('/'); !!}/basic/CaretPosition">Caret Position</a>
                </li>
            </ul>
            <!-- /.nav-second-level -->
        </li>
        <li>
            <a href="#">Control<span class="fa arrow"></span></a>
            <ul class="nav nav-second-level">
                <li>
                    <a href="{!! url('/'); !!}/control/Numeric">Numeric</a>
                </li>
                <li>
                    <a href="{!! url('/'); !!}/control/Datalist">Datalist</a>
                </li>
            </ul>
            <!-- /.nav-second-level -->
        </li>
        <li>
            <a href="#">Form<span class="fa arrow"></span></a>
            <ul class="nav nav-second-level">
                <li>
                    <a href="{!! url('/'); !!}/form/FormTabRegular">Form Tab Regular</a>
                </li>
                <li>
                    <a href="{!! url('/'); !!}/form/TabScope">Tab Scope</a>
                </li>
                <li>
                    <a href="{!! url('/'); !!}/form/TabScopeModal">Tab Scope Modal</a>
                </li>
                <li>
                    <a href="{!! url('/'); !!}/form/GridForm">Grid Form</a>
                </li>
                <li>
                    <a href="{!! url('/'); !!}/form/GridInput">Grid Input</a>
                </li>
            </ul>
            <!-- /.nav-second-level -->
        </li>
    </ul>
</div>
<!-- /.sidebar-collapse -->
