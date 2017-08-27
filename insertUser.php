<?php 

// PHP POST servis za snimanje korisnika u bazu
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');

$_POST = json_decode(file_get_contents('php://input'),true);

if(isset($_POST['ime']) && isset($_POST['prezime']) && isset($_POST['username']) && isset($_POST['password'])) {

	
	$ime = $_POST['ime'];
	$prezime = $_POST['prezime'];
	$username = $_POST['username'];
	$password = md5($_POST['password']);

	$db = new mysqli('localhost', 'root','', 'methotels');
	
	if (mysqli_connect_errno()) {
		die("Konekcija neuspesna: " . $db->connect_error);
	} 
	
	$sql = "INSERT INTO korisnik(ime, prezime, username, password) VALUES ('".$ime."', '".$prezime."', '".$username."', '".$password."');";

	$result = $db->query($sql);
	
	if ($result){
		echo '{ "result":"success",';
		echo ' "username": "';
		echo stripslashes($username);
		echo '"}';		
	}
	else{
		echo '{ "result":"error",';
		echo ' "username": "';
		echo stripslashes($username);
		echo '"}';		
	}
	
	$db->close ();
}
else{
	
	echo '{ "result":"prazan post objekat"}';		
}

?>