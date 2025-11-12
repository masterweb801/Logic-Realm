<?php
require "../functions/headers.php";
require "../functions/response.php";
require '../_config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json);

    if ($data !== null && isset($data->slug)) {
        require '../_config.php';

        $slug = mysqli_real_escape_string($conn, $data->slug);

        $stmt = $conn->prepare("SELECT name, slug, sdesc, img FROM softwares WHERE slug != ? LIMIT 4");
        $stmt->bind_param("s", $slug);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $apps = [];
            while ($app = $result->fetch_assoc()) {
                $apps[] = $app;
            }
            mysqli_close($conn);
            response(200, "Similar apps retrieved successfully", $apps);
        } else {
            response(200, "No apps without the given slug", null);
        }

    } else {
        response(400, "Bad Request: 'slug' parameter is missing", null);
    }
} else {
    response(405, "Method Not Allowed", null);
}