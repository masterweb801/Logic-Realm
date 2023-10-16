<?php
require "../_config.php";

if (isset($_POST['submit'])) {
    $name = $_POST['comp_name'];
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = md5(mysqli_real_escape_string($conn, $_POST['password']));
    $imgl = $_POST['image_link'];
    $webl = $_POST['web_link'];
    $loc = $_POST['location'];
    $phone = $_POST['phone_number'];

    $query = "SELECT * FROM `clients` WHERE `email`='" . $email . "'";
    $vem = mysqli_query($conn, $query);
    if (mysqli_num_rows($vem) == 0) {
        $sql = "INSERT INTO `clients` (`name`, `email`, `pass`, `img_link`, `web`, `location`, `phone`) VALUES ('$name', '$email', '$password', '$imgl', $webl, '$loc', '$phone')";
        mysqli_query($conn, $sql);
        session_start();
        $_SESSION['logged_in'] = true;
        $_SESSION['mail'] = $email;
        header("Location: index.php");
        exit();
    } else {
        $error_message = "This Email Is Already Registered";
    }
}
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Client Register</title>
    <meta name="description"
        content="Logic Realm is a comprehensive platform where individuals can request custom software development services and access a wide range of open-source software solutions. Empower your work with efficient and tailored software solutions or explore our repository of open-source tools.">
    <meta name="keywords"
        content="software development, custom software, open-source software, software solutions, software repository, logic realm">
    <script src="../script.js" defer></script>
    <link rel="icon" type="image/x-icon" href="../img/icon.ico">
    <link rel="stylesheet" type="text/css" href="style.css">

    <style>
        .extras {
            height: 100%;
            padding: 30px;
        }

        textarea {
            resize: none;
        }
    </style>

</head>

<body>
    <header>
        <div class="container">
            <h1>Logic Realm</h1>
            <div class="menu-toggle">
                <input type="checkbox">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav>
            <ul>
                    <li><a href="../index.html">Home</a></li>
                    <li><a href="../all-apps.html">Softwares</a></li>
                    <li><a href="https://skillfolio.rf.gd/" target="_blank">About</a></li>
                    <li><a href="../contact.php">Contact</a></li>
                    <li><a class="active" href="#">Clients</a></li>
                    <li><a href="../freelancers/login.php">Freelancers</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <section class="extras">
        <div class="f-container">
            <h2>Client Register</h2>
            <?php if (isset($error_message)): ?>
                <p class="error-message">
                    <?php echo $error_message; ?>
                </p>
            <?php endif; ?>
            <form action="register.php" method="POST">
                <div class="form-group">
                    <label for="comp_name">Name</label>
                    <input type="text" class="form-control" id="comp_name" name="comp_name" required>
                </div>

                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" class="form-control" id="email" name="email" required>
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" name="password" required>
                </div>

                <div class="form-group">
                    <label for="image_link">Image Link</label>
                    <input type="text" class="form-control" id="image_link" name="image_link" required>
                </div>

                <div class="form-group">
                    <label for="web_link">Website</label>
                    <input type="text" class="form-control" id="web_link" name="web_link" required>
                </div>

                <div class="form-group">
                    <label for="location">Location</label>
                    <input type="text" class="form-control" id="location" name="location" required>
                </div>

                <div class="form-group">
                    <label for="phone_number">Phone Number With Country Code</label>
                    <input type="text" class="form-control" id="phone_number" name="phone_number" required>
                </div>

                <div class="form-group">
                    <label class="tog">Already On Logic Realm? <a href="login.php" class="tog-link">Login</a></label>
                </div>
                <div class="form-group">
                    <input type="submit" name="submit" value="Register">
                </div>
            </form>
        </div>
    </section>
</body>

</html>