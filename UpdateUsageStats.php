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

//Update the table
$query = mysql_query("SELECT * FROM usage_stats WHERE username=".$_POST['username'].";");

if(!$query){
	mysql_query('INSERT INTO usage_stats VALUES ("'.$_POST['username'].'", 0, 0, 0)'); 
	echo("There were no stats for the given account - stats have been created.");
}

$stat = $_POST["stat_to_update"];
echo('SELECT '.$stat.' FROM usage_stats WHERE username="'.$_POST['username'].'";');
$current_val = mysql_fetch_array(mysql_query('SELECT '.$stat.' FROM usage_stats WHERE username="'.$_POST['username'].'";'))[0];
echo("UPDATE usage_stats SET ".$stat."=".($current_val + 1)." WHERE username=".$_POST['username'].";");
$query = mysql_query('UPDATE usage_stats SET '.$stat.'='.($current_val + 1).' WHERE username="'.$_POST['username'].'";'); 

?> 