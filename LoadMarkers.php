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
$query = mysql_query("select * from markers"); 
$markers_JSON = '{"markers":[';
$row_count = 0;
while($row = mysql_fetch_array($query)){
	if($row_count > 0){
		$markers_JSON = $markers_JSON.',';
	}
	$markers_JSON = $markers_JSON.'{"lat":'.$row[0].', "lng":'.$row[1].'}';
	$row_count++;
}
$markers_JSON = $markers_JSON.']}';

echo $markers_JSON;
?> 