<?php

// PHP POST servis za snimanje korisnika u bazu

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');

$_POST = json_decode(file_get_contents('php://input'),true);

if(isset($_POST['broj_sobe']) && isset($_POST['broj_kreveta']) && isset($_POST['broj_kvadrata'])  && isset($_POST['id_hotel'])) {


	$broj_sobe = $_POST['broj_sobe'];
	$broj_kreveta = $_POST['broj_kreveta'];
	$broj_kvadrata = $_POST['broj_kvadrata'];
	$id_hotel = $_POST['id_hotel'];

	$db = new mysqli('localhost', 'root','', 'methotels');

	if (mysqli_connect_errno()) {
		die("Konekcija neuspesna: " . $db->connect_error);
	}

	$sql = "INSERT INTO soba(broj_sobe, broj_kreveta, broj_kvadrata, id_hotel) VALUES ('".$broj_sobe."', '".$broj_kreveta."', '".$broj_kvadrata."', '".$id_hotel."');";

	$result = $db->query($sql);

	if ($result){
		echo '{ "result":"success",';
		echo ' "broj_sobe": "';
		echo stripslashes($broj_sobe);
		echo '"}';
	}
	else{
		echo '{ "result":"error",';
		echo ' "broj_sobe": "';
		echo stripslashes($broj_sobe);
		echo '"}';
	}

	$db->close ();
}
else{

	echo '{ "result":"prazan post objekat"}';
}

?>
