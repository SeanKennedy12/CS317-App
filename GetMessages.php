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

//Load in the saved markers
$query = mysql_query("select * from messages"); 
$messages_JSON = '{"messages":[';
$row_count = 0;
while($row = mysql_fetch_array($query)){
	if($row_count > 0){
	    $messages_JSON = $messages_JSON.',';
	}
	$messages_JSON = $messages_JSON.'"'.$row[0].'"';
	$row_count++;
}
$messages_JSON = $messages_JSON.']}';

echo $messages_JSON;
?>