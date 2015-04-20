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

//Delete the given marker
$row = mysql_query("DELETE FROM markers WHERE lat=".$_POST['lat']." AND lng=".$_POST['lng'].";");
if($row){
	echo "true";
}else{
	echo "false";
}
?> 