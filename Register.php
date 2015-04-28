<?php 
// Check that username and password are valid before proceeding
$username_len = strlen($_POST['username']);
$password_len = strlen($_POST['password']);
$username_min = 4;
$username_max = 32;
$password_min = 6;
$password_max = 32;
if($username_len >= 4 and $username_len <= 32 and $password_len >= 8 and $password_len <= 32){
    continueRegistration();
}else{
	/*
	* '###' is included for split() purposes
	*/
	echo '-1###'.$username_min.'###'.$username_max.'###'.$password_min.'###'.$password_max.'###';
	echo 'Invalid character length of user/pass caught by php: username_len='.username_len.', password_len='.password_len.'...';
	echo 'username_min='.$username_min.', username_max='.$username_max.', password_min='.$password_min.', password_max='.$password_max;
}
function continueRegistration(){
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
		echo '1';
	}else{
		echo '0';
	}
}
?> 
