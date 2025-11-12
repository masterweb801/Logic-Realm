<?php
$hostname = "localhost";
$username = "root";
$password = "";
$dbname = "logic_realm";

$conn = mysqli_connect($hostname, $username, $password, $dbname);
$conn->set_charset("utf8mb4");

if (!$conn) {

    echo "Database connection error" . mysqli_connect_error();

}
;