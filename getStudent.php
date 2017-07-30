<?php 

if(isset($_GET['broj_indeksa'])) {


	$brind = $_GET['broj_indeksa'];

	$db = new mysqli('localhost', 'root','', 'studenti');
	
	if ($db->connect_error) {
		die("Konekcija neuspesna: " . $db->connect_error);
	}
	else{
		$query = "select * from student where broj_indeksa ='$brind'";
		$result = $db->query($query);
		$num_results = $result->num_rows;
		

		for ($i=0; $i < $num_results; $i++) {
			$row = $result->fetch_assoc();
			echo '{ broj_indeksa: "';
			echo stripslashes($row['broj_indeksa']);
			echo '" , Ime: "';
			echo htmlspecialchars(stripslashes($row['ime']));
			echo '", Prezime: "';
			echo stripslashes($row['prezime']);
			echo '", datum_rodjenja: "';
			echo stripslashes($row['datum_rodjenja']);
			echo '"}';
			
			$result->close();
			/* disconnect from the db */
		}
		
		$db->close ();
	}
}
else
{
	echo 'Invalid request';
}

?>