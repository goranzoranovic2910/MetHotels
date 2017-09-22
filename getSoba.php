<?php

// PHP servis za filtriranje soba
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');

$result = "";

$db = new mysqli('localhost', 'root','', 'methotels');

if (mysqli_connect_errno()) {
	die("Konekcija neuspesna: " . $db->connect_error);
}

$sql = "SELECT broj_sobe, broj_kreveta, broj_kvadrata, id_hotel FROM soba where broj_sobe='".$_GET["broj_sobe"]."'";
$query = $db->prepare($sql);
$query->execute();
$query->store_result();
$query->bind_result($bs, $bk, $bkv, $idh);

if ($query->num_rows > 0) {

	while($row = $query->fetch()){

		$result .= "{ \"broj_sobe\":".$bs.", \"broj_kreveta\":".$bk.", \"broj_kvadrata\":".$bkv." , \"id_hotel\":".$idh."}";
		$first = false;
	}
}
$query->close();

echo $result;

?>
