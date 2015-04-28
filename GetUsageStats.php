<?php 
$servername = "devweb2014.cis.strath.ac.uk";
$username = "psb12191";
$password = "uanoneph";

// Create connection
$conn = mysql_connect($servername, $username, $password);
$db = mysql_select_db($username);
if(!$conn or !$db){
	die(mysql_error());
}

//Attempt to get the data
$query = mysql_query('SELECT * FROM usage_stats WHERE username="'.$_POST['username'].'";');

if(!$query){
	mysql_query('INSERT INTO usage_stats VALUES ("'.$_POST['username'].'", 0, 0, 0, 0)'); 
	//Attempt to get the data again - it should succeed now
	$query = mysql_query('SELECT * FROM usage_stats WHERE username="'.$_POST['username'].'";');
}

$row = mysql_fetch_array($query);
//echo $row[1].'###'.$row[2].'###'.$row[3].'###'.$row[4];
echo '{"markers_created":'.$row[1].', "markers_cleared":'.$row[2].', "messages_sent": '.$row[3].', "checked_about": '.$row[4].'}';

?> 