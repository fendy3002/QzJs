<?php

namespace App\Http\Controllers;

class FormController extends Controller {

	public function index($module)
	{
		return view('form.' . $module);
	}

}
