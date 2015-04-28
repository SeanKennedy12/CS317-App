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
//Check if account with given username and password exists
$query = mysql_query('SELECT * FROM app_accounts WHERE username="'.$_POST['username'].'";');
$row = mysql_fetch_array($query);
if($row){
	if(password_verify($_POST['password'], $row[1])){
		echo($row[2]); // Success! Echo the account level.
	}else{
		//echo('--'.$pwv).'--';
		//echo('Verification failed: pw=|'.$_POST['password'].'|, hash=|'.$row[1].'|');
		echo("-2"); // Password was incorrect
	}
}else{
	echo("-1"); // Account could not be found
}
?> 
