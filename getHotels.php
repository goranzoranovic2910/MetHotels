<?php

// PHP servis za filtriranje soba
header('Access-Control-Allow-Origin: http://localhost:3000');

$result = "[";

$db = new mysqli('localhost', 'root','', 'methotels');

if (mysqli_connect_errno()) {
	die("Konekcija neuspesna: " . $db->connect_error);
}

$sql = "SELECT id, ime FROM hotel";
  $query = $db->prepare($sql);
  $query->execute();
  $query->store_result();
	$query->bind_result($id, $ime);

  if ($query->num_rows > 0) {

	$first = true;
	while($row = $query->fetch()){

		if(!$first){
			$result .=",";
		}

		$result .= "{ \"id\":".$id.", \"ime\":\"".$ime."\"}";
		$first = false;
	}
}
  $query->close();

$result .= "]";
echo $result;

?>
