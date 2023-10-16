<?php
require "../_config.php";

if (isset($_POST['submit'])) {
    $fname = $_POST['first_name'];
    $lname = $_POST['last_name'];
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = md5(mysqli_real_escape_string($conn, $_POST['password']));
    $imgl = $_POST['image_link'];
    $loc = $_POST['location'];
    $phone = $_POST['phone_number'];
    $dob = $_POST['birthday'];
    $bio = mysqli_real_escape_string($conn, $_POST['bio']);
    $pfl = $_POST['portfolio_link'];
    $skills = $_POST['skills'];
    $exp = $_POST['years_of_experience'];

    $query = "SELECT * FROM `freelancers` WHERE `email`='" . $email . "'";
    $vem = mysqli_query($conn, $query);
    if (mysqli_num_rows($vem) == 0) {
        $sql = "INSERT INTO `freelancers` (`fname`, `lname`, `email`, `pass`, `img`, `location`, `phone`, `bday`, `bio`, `portf`, `skills`, `exp`, `vs`, `pr`) VALUES ('$fname', '$lname', '$email', '$password', '$imgl', '$loc', '$phone', '$dob', '$bio', '$pfl', '$skills', '$exp', 1, 0)";
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
    <title>Freelancer Register</title>
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
                    <li><a href="clients/index.php">Clients</a></li>
                    <li><a class="active" href="#">Freelancers</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <section class="extras">
        <div class="f-container">
            <h2>Freelancer Register</h2>
            <?php if (isset($error_message)): ?>
                <p class="error-message">
                    <?php echo $error_message; ?>
                </p>
            <?php endif; ?>
            <form action="register.php" method="POST">
                <div class="form-group">
                    <label for="first_name">First Name</label>
                    <input type="text" class="form-control" id="first_name" name="first_name" required>
                </div>
                <div class="form-group">
                    <label for="last_name">Last Name</label>
                    <input type="text" class="form-control" id="last_name" name="last_name" required>
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
                    <label for="location">Location</label>
                    <input type="text" class="form-control" id="location" name="location" required>
                </div>
                <div class="form-group">
                    <label for="phone_number">Phone Number With Country Code</label>
                    <input type="text" class="form-control" id="phone_number" name="phone_number" required>
                </div>
                <div class="form-group">
                    <label for="birthday">Birthday</label>
                    <input type="date" class="form-control" id="birthday" name="birthday" required>
                </div>
                <div class="form-group">
                    <label for="bio">Bio</label>
                    <textarea class="form-control" id="bio" name="bio" rows="5" required></textarea>
                </div>
                <div class="form-group">
                    <label for="portfolio_link">Portfolio Link</label>
                    <input type="text" class="form-control" id="portfolio_link" name="portfolio_link" required>
                </div>
                <div class="form-group">
                    <label for="skills">Skills &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ( HTML, CSS, ... )</label>
                    <input type="text" class="form-control" id="skills" name="skills"
                        placeholder="Comma-separated list of skills" required>
                </div>
                <div class="form-group">
                    <label for="years_of_experience">Years of Experience</label>
                    <input type="number" class="form-control" id="years_of_experience" name="years_of_experience"
                        required>
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