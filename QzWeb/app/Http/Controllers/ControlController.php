<?php

namespace App\Http\Controllers;

class ControlController extends Controller {

	public function index($module)
	{
		return view('control.' . $module);
	}

}
