<?php
	// PHP POST servis za snimanje korisnika u bazu

	header('Access-Control-Allow-Origin: http://localhost:3000');
	header('Access-Control-Allow-Headers: Content-Type');

	$_POST = json_decode(file_get_contents('php://input'),true);

	if(isset($_POST['broj_sobe'])) {

		$broj_sobe = $_POST['broj_sobe'];

		$db = new mysqli('localhost', 'root','', 'methotels');

		if (mysqli_connect_errno()) {
			die("Konekcija neuspesna: " . $db->connect_error);
		}

		$sql = "delete from soba where broj_sobe='".$broj_sobe."';";

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
