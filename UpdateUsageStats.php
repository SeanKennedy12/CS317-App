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
//Update the table
$query = mysql_query("SELECT * FROM usage_stats WHERE username=".$_POST['username'].";");
if(!$query){
	mysql_query('INSERT INTO usage_stats VALUES ("'.$_POST['username'].'", 0, 0, 0, 0)'); 
}
$stat = $_POST["stat_to_update"];
$current_val = mysql_fetch_array(mysql_query('SELECT '.$stat.' FROM usage_stats WHERE username="'.$_POST['username'].'";'))[0];
if($stat == "checked_about"){
	$query = mysql_query('UPDATE usage_stats SET checked_about=1 WHERE username="'.$_POST['username'].'";'); 
	echo 1;
}else{
	$query = mysql_query('UPDATE usage_stats SET '.$stat.'='.($current_val + 1).' WHERE username="'.$_POST['username'].'";'); 
	echo $current_val + 1;
}

?> 

