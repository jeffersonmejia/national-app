<?php
function conn(){
	$conn = msql_connect("localhost", "root", "", "users");

	if(!$conn) die("Connection has failure");
	echo "Conexión exitosa";
}
?>