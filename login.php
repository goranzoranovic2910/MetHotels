<?php 

// PHP servis za logovanje korisnika na sistem

$_POST = json_decode(file_get_contents('php://input'),true);

if(isset($_POST['username']) && isset($_POST['password'])) {

	$username = $_POST['username'];
	$password = $_POST['password'];

	$db = new mysqli('localhost', 'root','', 'methotels');
	
	if (mysqli_connect_errno()) {
		die("Konekcija neuspesna: " . $db->connect_error);
	} 
	
	$sql = "SELECT * FROM korisnik WHERE username=? AND password=?";
    $query = $db->prepare($sql);
    $query->bind_param('ss',$username, md5($password));
    $query->execute();
    $query->store_result();
	
    if ($query->num_rows > 0) {
		
        echo '{ "result":"true"}';
		
    } else{
		
        echo '{ "result":"false"}';	
    } 
    $query->close();
}
else{
	echo '{ "result":"prazan post objekat"}';		
}

?>