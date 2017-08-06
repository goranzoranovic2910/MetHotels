

<?php
include("userapi.php");
 
if(isset($_POST['submit'])){
        
    if(isset($_POST['ime']) && isset($_POST['prezime']) && isset($_POST['username']) && isset($_POST['password'])){
        if(insertUser($_POST['ime'],$_POST['prezime'],$_POST['username'],$_POST['password']))
		{
			echo "Uspešna registracija";
			header("Location: prijava.php");
		}
		else{
			echo "Registracija nije uspesna. Korinik verovatno vec postoji u bazi podataka!";
		}

    } else{
        echo "Niste popunili sva polja";
    }
}
 
?>

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Bootstrap 101 Template</title>

    <!-- Bootstrap -->
    <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
	
	<style>
		
		.jumbotron{
			height:300px;
		}
	
	</style>
	
	
  </head>
  <body>
	
	<div class="container">
		<div class="row" style="width:50%">

 
			<form action="registerUser.php" method="POST" enctype="application/x-www-form-urlencoded">

			<div class="form-group">
			  <label for="ime">Ime:</label>
			  <input type="text" name="ime" id="ime" class="form-control"/>
			</div>

			<div class="form-group">
			  <label for="prezime">Prezime:</label>
			  <input type="text" name="prezime" id="prezime" class="form-control"/>
			</div>

			<div class="form-group">
			  <label for="username">Korisnicko ime:</label>
				<input type="text" name="username"  class="form-control"/>
			</div>

			<div class="form-group">
			  <label for="password">Sifra:</label>
			  <input type="password" name="password"  class="form-control"/>
			</div>

			<input type="submit" name="submit" class="btn btn-primary" value="Registrujte nalog"/>
			</form>


		</div>
	</div>
  
  
    

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>