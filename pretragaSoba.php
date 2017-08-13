<?php 

// PHP servis za filtriranje soba
header('Access-Control-Allow-Origin: http://localhost:3000'); 
$result = "[";

	$db = new mysqli('localhost', 'root','', 'methotels');
	
	if (mysqli_connect_errno()) {
		die("Konekcija neuspesna: " . $db->connect_error);
	} 
	
	$sql = "SELECT broj_sobe, broj_kreveta, broj_kvadrata FROM soba";
    $query = $db->prepare($sql);
    $query->execute();
    $query->store_result();
	$query->bind_result($bs, $bk, $bkv);
	
	
	
    if ($query->num_rows > 0) {
			
		$first = true;
		while($row = $query->fetch()){
		
			if(!$first){
				$result .=",";
			}	

			$result .= "{ \"broj_sobe\":".$bs.", \"broj_kreveta\":".$bk.", \"broj_kvadrata\":".$bkv."}";
			$first = false;
		}
	}
    $query->close();

$result .= "]";
echo $result;

?>