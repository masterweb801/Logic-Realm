<?php
if (!isset($_GET['id'])) {
    header("location: index.php");
}
require "../api/_config.php";

if (isset($_POST['name'])) {
    $name = $_POST['name'];
    $id = $_GET['id'];
    $desc = $_POST['description'];

    if ($name != "Owner") {
        if ($name == "#69") {
            $name = "Owner";
        }
        $sql = "INSERT INTO `reply`(`for_id`, `name`, `description`) VALUES ('" . $id . "','" . $name . "','" . $desc . "')";
        mysqli_query($conn, $sql);
        header("location: index.php");
    } else {
        echo "<script>
            alert('This Name Is Restricted!');
        </script>";
    }
}
?>
<!DOCTYPE html>
<html>

<head>
    <title>Support | LogicRealm</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="style.css" />
    <link rel="canonical" href="https://logicrealm.xyz/" />
    <link rel="icon" type="image/x-icon" href="../img/icon.ico" />
    <script src="https://kit.fontawesome.com/171e689b28.js" crossorigin="anonymous"></script>

    <style>
        .back-btn {
            background-color: #0082e6;
            color: white;
            padding: 6px 10px;
            border: none;
            cursor: pointer;
            border-radius: 12px;
            text-decoration: none;
        }

        .back-btn:hover {
            background-color: cyan;
        }

        .logo {
            margin-left: -50vw;
        }

        .bind {
            margin: 30px;
        }
    </style>
</head>

<body>
    <nav>
        <a class="back-btn" href="index.php"><b> Back </b><a>
                <div class="logo">Reply</div>
    </nav>

    <section class="main">
        <div class="container">
            <form method="post">
                <fieldset>
                    <div class="bind">
                        <label for="name"><b>Name:- </b></label>
                        <input type="text" name="name" id="name" placeholder="Your Name">
                        <label for="description"><b>Description:- </b></label><br>
                        <textarea id="description" name="description" placeholder="Describe Your Problems..."
                            style="height:150px"></textarea>
                        <button type="submit" class="submit" name="submit">Post</button>
                    </div>
                </fieldset>
            </form>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2023 Logic Realm Support Forum</p>
        </div>
    </footer>
</body>