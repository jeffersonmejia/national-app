<?php
	header("Content-Type: application/json");
	$json_data = file_get_contents('php://input');		
	$data = json_decode($json_data, true);
	$res = array("Response","");
	$json;

	$username = $data['username'];
	$password = $data['password'];
	$host = "localhost";
	$user = "root";
	$passwordServer = "12345";
	$dbname = "national";
	
	
	$conn = mysqli_connect($host, $user, $passwordServer, $dbname);
echo $username;
	$sql = "SELECT password FROM users WHERE email = '$username';";
	
	if($conn->connect_error)  $res[1] ="Connection unsuccessful";
	$result = $conn->query($sql);
	
	if(mysqli_num_rows($result)>0){
		while($row=mysqli_fetch_assoc($result)) $hash = $row;
	}else{
		$res[1] ="Not results";
	}

	if(!mysqli_query($conn, $sql)){
		$res[1] ="Query unsuccessful" . mysqli_connect_error();
	}
	$hashedPassword;
	foreach ($hash as $value) {
    $hashedPassword= $value;
	}
	if (password_verify($password, $hashedPassword)) {
		$res[1] ="the password is correct" . mysqli_error($conn);
	} else {
		$res[1] ="the password is not correct" . mysqli_error($conn);
	}
	$json = json_encode($res);
	echo $json;
	mysqli_close($conn);
?>