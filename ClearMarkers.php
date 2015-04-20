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

//Save the given marker
mysql_query("TRUNCATE markers;");
?> 