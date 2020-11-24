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
			$products = mysqli_query($dbconn, "SELECT * FROM `products`");
			if(mysqli_num_rows($products) > 0){
				$allproducts = mysqli_fetch_all($products, MYSQLI_ASSOC);
				echo json_encode(["success"=>1,"products"=>$allproducts]);
			}
			else{
				echo json_encode(["success"=>0]);
			}
			break;
		case "update":
			$product = json_decode($data["product"],TRUE);
			$id = $product['ID'];
			$name = addslashes($product['Name']);
			$price = $product['Price'];
			$detail = addslashes($product['Detail']);
			$success = 0;
			if($product['ID']===0){
				$sql = "INSERT INTO `products` (`ID`, `Name`, `Price`, `Detail`) VALUES (NULL,'$name','$price','$detail')";
				if (mysqli_query($dbconn, $sql)) {
					$success = 1;
					$error = '';
				}
				else{
					$error = mysqli_error($dbconn);	
				}
			}
			else{
				$sql = "UPDATE `products` SET Name=`$name`,Price=$price,Detail=`$detail` WHERE ID=$id";
			}

			echo json_encode(["success"=>$success,"data"=>$product, "error"=>$error]);
			
			break;
		case "remove":
			break;
	}	
?>