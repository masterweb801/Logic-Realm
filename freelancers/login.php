<?php
require "../_config.php";

if (isset($_POST['submit'])) {
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    if (empty($email) || empty($password)) {
        $error_message = "Please fill in all the fields.";
    } else {
        $query = "SELECT * FROM `freelancers` WHERE `email`='" . $email . "'";
        $sql = mysqli_query($conn, $query);
        if (mysqli_num_rows($sql) > 0) {

            $row = mysqli_fetch_assoc($sql);

            $user_pass = md5($password);

            $enc_pass = $row['pass'];

            if ($user_pass === $enc_pass) {
                session_start();
                $_SESSION['logged_in'] = true;
                $_SESSION['mail'] = $email;
                header("Location: index.php");
                exit();
            } else {
                $error_message = "Email or Password is Incorrect!";
            }
        } else {
            $error_message = "$email - This email not Exist!";
        }
    }
}
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Freelancer Login</title>
    <meta name="description"
        content="Logic Realm is a comprehensive platform where individuals can request custom software development services and access a wide range of open-source software solutions. Empower your work with efficient and tailored software solutions or explore our repository of open-source tools.">
    <meta name="keywords"
        content="software development, custom software, open-source software, software solutions, software repository, logic realm">
    <script src="../script.js" defer></script>
    <link rel="icon" type="image/x-icon" href="../img/icon.ico">
    <link rel="stylesheet" type="text/css" href="style.css">
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
                    <li><a href="clients/index.php">Clients</a></li>
                    <li><a class="active" href="#">Freelancers</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <section class="extras">
        <div class="f-container">
            <h2>Freelancer Login</h2>
            <?php if (isset($error_message)): ?>
                <p class="error-message">
                    <?php echo $error_message; ?>
                </p>
            <?php endif; ?>
            <form action="login.php" method="POST">
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <div class="form-group">
                    <label class="tog">New On Logic Realm? <a href="register.php" class="tog-link">Register
                            Now</a></label>
                </div>
                <div class="form-group">
                    <input type="submit" name="submit" value="Login">
                </div>
            </form>
        </div>
    </section>
</body>

</html>