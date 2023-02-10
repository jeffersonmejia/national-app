<?php
function startConn(){
	$host = "localhost";
	$user = "root";
	$password = "12345";
	$dbname = "national";

	$conn = mysqli_connect($host, $user, $password, $dbname);
	echo $conn;
	return $conn;
}
?>