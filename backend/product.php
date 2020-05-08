<?php
	header("Access-Control-Allow-Origin: *");

	if ($_SERVER['REQUEST_METHOD'] != 'POST') {
		exit;
	}

	require 'dbconnect.php';
	
	$data = json_decode(file_get_contents('php://input'),TRUE);
	if(empty($data))
		$data = $_POST;

	switch ($data["action"]){
		case "getall":
			$products = mysqli_query($dbconn, "SELECT * FROM `Products`");
			if(mysqli_num_rows($products) > 0){
				$allproducts = mysqli_fetch_all($products, MYSQLI_ASSOC);
				echo json_encode(["success"=>1,"products"=>$allproducts]);
			}
			else{
				echo json_encode(["success"=>0]);
			}
			break;
		case "create":
			break;
		case "update":
			break;
		case "remove":
			break;
	}

	
?>