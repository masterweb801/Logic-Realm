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

    $name = $data->name;
    $email = $data->email;
    $budget = $data->budget;
    $category = $data->category;
    $title = $data->title;
    $details = $data->details;

    $sql = "INSERT INTO `Orders`(`category`, `name`, `email`, `budget`, `title`, `details`) VALUES ('" . $category . "','" . $name . "','" . $email . "'," . $budget . ",'" . $title . "','" . $details . "')";
    mysqli_query($conn, $sql);

    $sql2 = 'SELECT * FROM `Orders` WHERE `email`="' . $email . '" AND `category`="' . $category . '" AND `budget`="' . $budget . '" AND `status`="open"';
    $data2 = mysqli_query($conn, $sql2);
    $total = mysqli_num_rows($data2);

    if ($total == 1) {
        $result = mysqli_fetch_assoc($data2);
        response($result['id'], 200, "Succesfull");
    } elseif ($total > 1) {
        $a = 1;
        while ($a <= $total) {
            $result = mysqli_fetch_assoc($data2);
            if ($a == $total) {
                response($result['id'], 200, "Succesfull");
            }
            $a++;
        }
    } else {
        response(null, 500, "Internal Server Error");
    }
} else {
    response(null, 400, "Bad Request");
}

function response($order_id, $response_code, $response_desc)
{
    $response['order_id'] = $order_id;
    $response['response_code'] = $response_code;
    $response['response_desc'] = $response_desc;

    $json_response = json_encode($response);
    echo $json_response;
}