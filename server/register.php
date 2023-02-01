<?php
	$host = "localhost";
	$user = "root";
	$passwordServer = "12345";
	$dbname = "national";

	$conn = mysqli_connect($host, $user, $passwordServer, $dbname);

	$json_data = file_get_contents('php://input');
	$data = json_decode($json_data, true);
	
	$nombre = $data['nombre'];
	$apellido = $data['apellido'];
	

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

	if(!$conn) die("conexión failed");
	$sql = "INSERT INTO users(dni, name, lastname, accountid, address, fingerprint, date_born, tel, email, password, salary) 
	VALUES('$dni', '$name', '$lastname', '1', '$address', '$fingerprint', '$date_born', '$tel', '$email', '$password', '$salary');
	";
	$json = json_encode($res);
	header("Content-Type: application/json");
	
	
	if(mysqli_query($conn, $sql)){
		echo json_encode(array("message"=>"successful"));
	}else{
		echo json_encode(array("message"=>"unsuccessful"));
	}
	mysqli_close($conn);
?>