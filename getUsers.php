<?php
// PHP servis za logovanje korisnika na sistem
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');

if(!isset($_SESSION['username'])){
	 echo '{ "result":"Korisnik nije ulogovan!"}';
}
else{
    $_POST = json_decode(file_get_contents('php://input'),true);

    $db = new mysqli('localhost', 'root','', 'methotels');

    if (mysqli_connect_errno()) {
    	die("Konekcija neuspesna: " . $db->connect_error);
    }
    $result = "[";

    $sql = "SELECT username FROM korisnik";
    $query = $db->prepare($sql);
    $query->execute();
    $query->store_result();
    $query->bind_result($username);

    if ($query->num_rows > 0) {

      $first = true;
      while($row = $query->fetch()){

        if(!$first){
          $result .=",";
      }

      $result .= "{ \"username\":\"".$username."\"}";
      $first = false;
    }
    $query->close();

    $result .= "]";
    echo $result;
  }
}
?>
