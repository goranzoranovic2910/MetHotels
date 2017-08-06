<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Bootstrap 101 Template</title>

	 <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
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
		<div class="row">
			<div class="col-lg-12 well">
				<h1>Welcome to MetHotels!</h1>
				<?php
					session_start();
					if(isset($_SESSION['username'])){
						
						echo "<button type='button' class='btn btn-link btn-md'>Korisnik:".$_SESSION['username']."</button>";
						echo "<br><a href='logout.php' class='btn btn-link btn-md' >Log out</a>";
						
					}else{
				
						echo "<a href='prijava.php' class='btn btn-link btn-md' >Prijava</a>";
						echo "<br><a href='registerUser.php' class='btn btn-link btn-md' >Registracija</a>";
					}
				
				?>
			</div>
		</div>
		
		<div class="row">
			<div class="col-lg-3 col-md-6 col-xs-12 jumbotron" style="background-color:paleturquoise">
				<h2>Home</h2>
				
				<p>MetHotels je web aplikacija koja je aplikacija koja omogućava rezervaciju soba.</p>
			
			</div>
			
			<div class="col-lg-3 col-md-6 col-xs-12 jumbotron" style="background-color:aliceblue">
			
			<h2>Rezervacije</h2>
				
				<p>Rezervisite vasu sobu online putem nase aplikacije.</p>
				<b>
			
			</div>
			
			
			
			<div class="col-lg-3 col-md-6 col-xs-12 jumbotron" style="background-color:antiquewhite">
			
				<h2>Galerija</h2>
				
				<p>Pogledajte slike hotela i njegove okoline.</p>
				<b>
			
			</div>
			
			<div class="col-lg-3 col-md-6 col-xs-12 jumbotron" style="background-color:lightsteelblue">
			
				<h2>O nama</h2>
				
				<p>MetHotels je web aplikacija koja je aplikacija koja omogućava rezervaciju soba..</p>
			
			
			</div>
		</div>
	</div>

  </body>
</html>