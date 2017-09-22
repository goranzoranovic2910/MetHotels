<?php

// PHP POST servis za snimanje korisnika u bazu

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');

$_POST = json_decode(file_get_contents('php://input'),true);

if(isset($_POST['id']) && isset($_POST['ime'])) {


	$id = $_POST['id'];
	$ime = $_POST['ime'];

	$db = new mysqli('localhost', 'root','', 'methotels');

	if (mysqli_connect_errno()) {
		die("Konekcija neuspesna: " . $db->connect_error);
	}

	$sql = "INSERT INTO hotel(id, ime) VALUES ('".$id."', '".$ime."');";

	$result = $db->query($sql);

	if ($result){
		echo '{ "result":"success",';
		echo ' "id": "';
		echo stripslashes($id);
		echo '"}';
	}
	else{
		echo '{ "result":"error",';
		echo ' "id": "';
		echo stripslashes($id);
		echo '"}';
	}

	$db->close ();
}
else{

	echo '{ "result":"prazan post objekat"}';
}
?>
