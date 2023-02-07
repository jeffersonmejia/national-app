<?php
	header("Content-Type: application/json");
	$host = "localhost";
	$user = "root";
	$passwordServer = "12345";
	$dbname = "national";

	$conn = mysqli_connect($host, $user, $passwordServer, $dbname);

	$json_data = file_get_contents('php://input');
	$data = json_decode($json_data, true);
	
	$dni = $data['dni'];
	$fingerprint = $data['fingerprint'];
	$name = $data['name'];
	$lastname = $data['lastname'];
	$date_born = $data['date'];
	$address = $data['address'];
	$tel = $data['tel'];
	$email = $data['email'];
	$password = $data['password'];
	$salary = $data['salary'];
	$accountid =  mt_rand(10000, 99999999);
	$hash = password_hash($password, PASSWORD_BCRYPT);
	if(!$conn) 
	die("database connection error");
	


	$sql = "INSERT INTO users(dni, name, lastname, accountid, address, fingerprint, date_born, tel, email, password, salary) 
	VALUES('$dni', '$name', '$lastname', $accountid, '$address', '$fingerprint', '$date_born', '$tel', '$email', '$hash', '$salary');";
	
	if(mysqli_query($conn, $sql)){
		header('HTTP/1.0 200 Ok');
	}else{
		header('HTTP/1.0 500 Internal error');
	}

	mysqli_close($conn);
?>