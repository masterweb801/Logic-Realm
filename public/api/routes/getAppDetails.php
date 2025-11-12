<?php
require "../functions/headers.php";
require "../functions/response.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json);

    if ($data !== null && isset($data->slug)) {
        require '../_config.php';

        $slug = mysqli_real_escape_string($conn, $data->slug);

        $stmt = $conn->prepare("SELECT * FROM `softwares` WHERE `slug`=?");
        $stmt->bind_param("s", $slug);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $app = $result->fetch_assoc();
            response(200, "App details retrieved successfully", $app);
        } else {
            response(200, "No app found with the given slug", null);
        }
    } else {
        response(400, "Bad Request: 'slug' parameter is missing", null);
    }
    mysqli_close($conn);
} else {
    response(405, "Method Not Allowed", null);
}