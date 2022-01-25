<?php
$a = filter_input(INPUT_POST, 'a');
$b = filter_input(INPUT_POST, 'b');
$c = filter_input(INPUT_POST, 'c');
if (!empty($a)){
if (!empty($b)){
if (!empty($c)){
$host = "sql11.freesqldatabase.com";
$dbusername = "sql11467968";
$dbpassword = "m15ICdDYl9";
$dbname = "sql11467968";
// Create connection
$conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);
if (mysqli_connect_error()){
die('Connect Error ('. mysqli_connect_errno() .') '
. mysqli_connect_error());
}
else{
$sql = "INSERT INTO Field (a, b, c)
values ('$a','$a','$c')";
if ($conn->query($sql)){
echo "New record is inserted sucessfully";
}
else{
echo "Error: ". $sql ."
". $conn->error;
}
$conn->close();
}
}
else{
echo "Fehler Feld 1";
die();
}
}
else{
echo "Fehler feld 2";
die();
}
?>