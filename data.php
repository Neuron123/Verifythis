<?php

$q = $_REQUEST["q"];

$mysqli = new mysqli("localhost","root","","test");

// Check connection
if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}

// Perform query
if ($result = $mysqli -> query("SELECT * FROM bannedurls WHERE url_text = '$q'")) {
  $affected = $result -> fetch_assoc();
  
  if($affected){
	  $check = 1;
  }else{
	  $check = 0;
  }
  echo $check;
  // Free result set
  $result -> free_result();
}

$mysqli -> close();


?>