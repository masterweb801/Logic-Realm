<?php
header("Content-Type:application/json");
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST");
header('Access-Control-Max-Age: 1000');
header("Access-Control-Allow-Headers: X-API-KEY, X-Auth-Token, Authorization, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Access-Control-Allow-Origin, auth-token");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$json = file_get_contents('php://input');
$data = json_decode($json);
if ($data !== null) {
    require "../_config.php";

    $code = $data->code;

    $sql = 'SELECT * FROM `Orders` WHERE `id`=' . $code;
    $data = mysqli_query($conn, $sql);
    $total = mysqli_num_rows($data);
    if ($total > 0) {
        $result = mysqli_fetch_assoc($data);
        response(200, "Succesfull", $result);
    } else {
        response(404, "No Wishes Found", null);
    }
} else {
    response(400, "Bad Request", null);
}

function response($response_code, $response_desc, $response_data)
{
    $response['response_code'] = $response_code;
    $response['response_desc'] = $response_desc;
    $response['response_data'] = $response_data;

    $json_response = json_encode($response);
    echo $json_response;
}