<?php
session_start();
if (!isset($_SESSION['logged_in']) && $_SESSION['logged_in'] != true) {
    header("Location: login.php");
    exit();
} else {
    require "../_config.php";
    $query = "SELECT * FROM `clients` WHERE `email`='" . $_SESSION['mail'] . "'";
    $sql = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($sql);
}
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Client Profile</title>
    <meta name="description"
        content="Logic Realm is a comprehensive platform where individuals can request custom software development services and access a wide range of open-source software solutions. Empower your work with efficient and tailored software solutions or explore our repository of open-source tools.">
    <meta name="keywords"
        content="software development, custom software, open-source software, software solutions, software repository, logic realm">
    <script src="../script.js" defer></script>
    <link rel="icon" type="image/x-icon" href="../img/icon.ico">
    <link rel="stylesheet" type="text/css" href="style2.css">
    <script src="https://kit.fontawesome.com/171e689b28.js" crossorigin="anonymous"></script>
</head>

<body>
    <header>
        <div class="cont">
            <h1>Logic Realm</h1>
            <div class="menu-toggle">
                <input type="checkbox">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav>
                <ul>
                    <li><a class="active" href="#">Clients</a></li>
                </ul>
                <a href="login.php"><button class="lgout" role="button">Log Out</button></a>
            </nav>
        </div>
    </header>
    <div class="container">
        <div class="profile">
            <img src="<?php echo $row['img_link'] ?>" class="profile-picture">
            <div class="profile-details">
                <h2>
                    <?php echo $row['name'] ?>
                </h2>
                <div class="all-details">
                    <div class="all-details">
                        <p><i class="fa fa-map-marker"></i> Location:
                            <?php echo $row['location'] ?>
                        </p>
                        <p><i class="fas fa-envelope"></i> Email:
                            <?php echo $row['email'] ?>
                        </p>
                        <p><i class="fas fa-phone"></i> Phone:
                            <?php echo $row['phone'] ?>
                        </p>
                    </div>

                    <h3>Website:</h3>
                    <div class="all-details">
                        <a href="<?php echo $row['web'] ?>" target="_blank"><button class="prtf-btn" role="button">Visit My Website</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container2">
        <div class="container3">
            <div class="inbox-icon">
                <i class="fa fa-inbox"></i>
            </div>
            <div class="message">
                <p>Your inbox is empty.</p>
            </div>
        </div>

    </div>
    <div class="footer">
        <p>&copy; 2023 Logic Realm. All rights reserved.</p>
    </div>
</body>

</html>