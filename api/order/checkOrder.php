<?php
header("Content-Type:application/json");
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

$json = file_get_contents('php://input');
$data = json_decode($json);
if ($data !== null) {
    require "../_config.php";

    $code = $data->code;

    $sql = 'SELECT * FROM `orders` WHERE `id`=' . $code;
    $data = mysqli_query($conn, $sql);
    $total = mysqli_num_rows($data);
    $result = mysqli_fetch_assoc($data);
    response(200, "Succesfull", $result);
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