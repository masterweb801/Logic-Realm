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

    try {
        $sql = "UPDATE `Employee` SET `status`='free', `pid`=0 WHERE `pid`=" . $code;
        mysqli_query($conn, $sql);
        $sql2 = "UPDATE `Orders` SET `status`='done' WHERE `id`=" . $code;
        mysqli_query($conn, $sql2);
        response(true, 200, "Successfull");
    } catch (Exception $e) {
        response($e->getMessage(), 500, $e->getMessage());
    }
} else {
    response(null, 400, "Bad Request");
}

function response($response_data, $response_code, $response_desc)
{
    $response['response_code'] = $response_code;
    $response['response_desc'] = $response_desc;
    $response['response_data'] = $response_data;

    $json_response = json_encode($response);
    echo $json_response;
}