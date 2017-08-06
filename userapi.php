<?php 

$servername = "localhost";
$username = "root";
$password = "";
$database =  "MetHotels";
 
$conn = new mysqli($servername, $username, $password, $database);
 
 
if ($conn->connect_error) {
    die("Konekcija ima grešku: " . $conn->connect_error);
}


function userExists($username){
    global $conn;
    $sql = "SELECT * FROM korisnik WHERE username='".$username."'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        return true;
    } else{
        return false;
    } 
}


function insertUser($ime, $prezime, $username, $password)
{
    global $conn;
    if(userExists($username)){
		return false;
		
	}
	else{
		
		$sql = "INSERT INTO korisnik (ime,prezime,username,password) VALUES (?,?,?,?)";
        $query = $conn->prepare($sql);
        $query->bind_param('ssss',$ime,$prezime,$username,md5($password));
        $query->execute(); 
        $query->close();
		
		return true;
	}
}
 
function passwordValid($username, $password){
	
    global $conn;
    $sql = "SELECT * FROM korisnik WHERE username=? AND password=?";
    $query = $conn->prepare($sql);
    $query->bind_param('ss',$username,md5($password));
    $query->execute();
    $query->store_result();
    if ($query->num_rows > 0) {
        return 1;
    } else{
        return 0;
    } 
    $query->close();
}

?>