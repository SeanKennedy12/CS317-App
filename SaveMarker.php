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
$query = mysql_query("SELECT * FROM markers WHERE lat=".$_POST['lat']." AND lng=".$_POST['lng'].";");

if(!mysql_fetch_array($query)){
	mysql_query('INSERT INTO markers (lat, lng, username, type) VALUES ('.$_POST['lat'].', '.$_POST['lng'].', "'.$_POST['username'].'", '.$_POST['type'].');'); 
	echo('Inserted '.$_POST['lat'].' and '.$_POST['lng'].' with type '.$_POST['type'].' into table under username <'.$_POST['username'].'>');
}else{
	echo("A marker was already present at that location.");
}
?> 