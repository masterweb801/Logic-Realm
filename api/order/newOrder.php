<?php
require "../_config.php";

if (isset($_POST['name'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $description = $_POST['description'];
    $sq = "INSERT INTO `post`(`name`, `subject`, `description`) VALUES ('" . $name . "','" . $subject . "','" . $description . "')";
    mysqli_query($conn, $sq);
}
;