<?php
require "../functions/headers.php";
require "../functions/response.php";
require '../_config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $sql = "SELECT `id`,`name`, `slug`,`sdesc`,`img`,`size`,`platforms` FROM `softwares`;";
    $result = mysqli_query($conn, $sql);
    $total = mysqli_num_rows($result);

    if ($total > 0) {
        $apps = [];
        while ($row = mysqli_fetch_assoc($result)) {
            $apps[] = $row;
        }
        response(200, "Apps retrieved successfully", $apps);
    } else {
        response(200, "No apps found", null);
    }
    mysqli_close($conn);
} else {
    response(405, "Method Not Allowed", null);
}