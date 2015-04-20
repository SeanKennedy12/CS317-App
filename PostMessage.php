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

//Post the given marker

echo 'INSERT INTO messages (message, user) VALUES ("'.$_POST['message'].'", "'.$_POST['username'].'");';
mysql_query('INSERT INTO messages (message, user) VALUES ("'.$_POST['message'].'", "'.$_POST['username'].'");'); 
echo('\nInserted '.$_POST['message'].' and '.$_POST['username'].' into table');

?>