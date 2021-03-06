<?php
// PHP servis za logovanje korisnika na sistem
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');

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
			  session_start();
				$_SESSION['username'] = $username;
        echo '{ "result":"true", "session_id":"'.session_id().'"	}';

    } else{
				var_dump($query);
        echo '{ "result":"false"}';
    }
    $query->close();
}
else{
	echo '{ "result":"prazan post objekat"}';
}

?>
