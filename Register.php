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

//Check if account with given username already exists
$query = mysql_query('SELECT * FROM app_accounts WHERE username="'.$_POST['username'].'";');
$row = mysql_fetch_array($query);
if(!$row){
	mysql_query('INSERT INTO app_accounts (username, password, level) VALUES ("'.$_POST['username'].'", "'.password_hash($_POST['password'],PASSWORD_DEFAULT).'", "0
	");'); 
	echo 'true';
}else{
	echo 'false';
}

?> 