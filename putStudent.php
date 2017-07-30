<?php 

// DZ07

$_POST = json_decode(file_get_contents('php://input'),true);

if(isset($_POST['broj_indeksa']) && isset($_POST['ime']) && isset($_POST['prezime']) && isset($_POST['datum_rodjenja'])) {

	/* soak in the passed variable or set our own */
	$brind = $_POST['broj_indeksa'];
	$ime = $_POST['ime'];
	$prezime = $_POST['prezime'];
	$datum = $_POST['datum_rodjenja'];

	/* connect to the db */
	$db = new mysqli('localhost', 'root','', 'studenti');
	
	if (mysqli_connect_errno()) {
		die("Konekcija neuspesna: " . $db->connect_error);
	} 
	
	$sql = "INSERT INTO student(broj_indeksa, ime, prezime, datum_rodjenja) VALUES ('".$brind."', '".$ime."', '".$prezime."', '".$datum."');";

	$result = $db->query($sql);
	
	if ($result)
		echo $db->affected_rows." Student je dodat u bazu podataka";
	
	$db->close ();
}
else{
	
	echo "POST objekat je prazan!";
}

?>