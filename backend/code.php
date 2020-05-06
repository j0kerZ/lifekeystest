<?php
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: access");
	header("Access-Control-Allow-Methods: POST");
	header("Content-Type: application/json; charset=UTF-8");
	header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers");

	if ($_SERVER['REQUEST_METHOD'] != 'POST') {
		exit;
	}

	require 'dbconnect.php';

	switch $_POST["action"]{
		case "getall":
			$codes = mysqli_query($dbconn, "SELECT * FROM `Codes`");
			if(mysqli_num_rows($codes) > 0){
				$allcodes = mysqli_fetch_all($codes, MYSQLI_ASSOC);
				echo json_encode(["success"=>1,"codes"=>$allcodes]);
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