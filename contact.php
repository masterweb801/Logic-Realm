<?php
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mail = $_POST['email'];
    $msg = $_POST['msg'];

    $subject = "Soft Customer: " . $name;
    $url = "logicrealm.rf.gd/contact.php";

    header("Location: https://chatmeow.000webhostapp.com/cnt-api/cont.php?name=".$name."&subject=".$subject."&message=".$msg."&email=".$mail ."&url=".$url);

}
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logic Realm | Contact</title>
    <script src="script.js" defer></script>
    <link rel="icon" type="image/x-icon" href="img/icon.ico">
    <link rel="stylesheet" type="text/css" href="style2.css">
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
                    <li><a href="index.html">Home</a></li>
                    <li><a href="all-apps.html">Softwares</a></li>
                    <li><a href="https://skillfolio.rf.gd/" target="_blank">About</a></li>
                    <li><a class="active" href="#">Contact</a></li>
                    <li><a href="clients/index.php">Clients</a></li>
                    <li><a href="freelancers/index.php">Freelancers</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <section id="contact">
        <div class="cont">
            <h2>Contact Us</h2>
            <p>Have a project in mind or need assistance with our open-source solutions? Reach out to us and let's
                discuss how we can collaborate.</p>
            <form method="post">
                <input type="text" placeholder="Name" name="name" required>
                <input type="email" placeholder="Email" name="email" required>
                <textarea placeholder="Message" name="msg" required></textarea>
                <button name="submit" type="submit">Send</button>
            </form>
        </div>
    </section>

    <footer>
        <div class="cont">
            <p>&copy; 2023 Logic Realm. All rights reserved.</p>
        </div>
    </footer>

</body>

</html>