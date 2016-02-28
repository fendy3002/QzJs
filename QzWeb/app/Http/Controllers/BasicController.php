<?php

namespace App\Http\Controllers;

class BasicController extends Controller {

	public function index($module)
	{
		return view('basic.' . $module);
	}

}
