<?php 
$servername = "devweb2014.cis.strath.ac.uk";
$username = "psb12191";
$password = "uanoneph";

// Create connection
$conn = mysql_connect($servername, $username, $password);
$db = mysql_select_db($username);
if(!$conn or !$db){
	echo(mysql_error());
	die(mysql_error());
}

//Check if account with given username and password already exists
$query = mysql_query("SELECT * FROM app_accounts WHERE username=".$_POST['username']." AND password=".$_POST['password'].";");
if(!mysql_fetch_array($query)){
	mysql_query("INSERT INTO app_accounts (username, password) VALUES (".$_POST['username'].", ".$_POST['password'].");"); 
	echo("true");
}else{
	echo("false");
}

?> 