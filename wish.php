<?php
require "_config.php";

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $budget = $_POST['budget'];
  $category = $_POST['category'];
  $details = $_POST['details'];
  $sql = "INSERT INTO `Orders`(`category`, `name`, `email`, `budget`, `details`) VALUES ('" . $category . "','" . $name . "','" . $email . "'," . $budget . ",'" . $details . "')";
  mysqli_query($conn, $sql);
  $sql2 = 'SELECT * FROM `Orders` WHERE `email`="' . $email . '" AND `category`="' . $category . '" AND `budget`="' . $budget . '" AND `status`="open"';
  $data = mysqli_query($conn, $sql2);
  $total = mysqli_num_rows($data);
  if ($total == 1) {
    $result = mysqli_fetch_assoc($data);
    echo "<script>alert('Your Wish Has Been Submited Successfuly. And Your Wish ID Is:- " . $result['id'] . "');</script";
  } elseif ($total > 1) {
    $a = 1;
    while ($a <= $total) {
      $result = mysqli_fetch_assoc($data);
      if ($a == $total) {
        echo "<script>alert('Your Wish Has Been Submited Successfuly. And Your Wish ID Is:- " . $result['id'] . "');</script";
      }
      $a++;
    }
  } else {
    echo "<script>alert('Internal Server Error')</script>";
  }
}

?>

<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Logic Realm | Contact</title>
  <link rel="icon" type="image/x-icon" href="img/icon.ico" />
  <link rel="stylesheet" type="text/css" href="style2.css" />

</head>

<body>
  <header>
    <div class="container">
      <h1>Logic Realm</h1>
      <div class="menu-toggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="all-apps.html">Softwares</a></li>
          <li>
            <a href="https://www.skillfolio.rf.gd/" target="_blank">About</a>
          </li>
          <li><a class="active" href="#">Wish</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <section id="contact">
    <div class="cont-form">
      <h2>Wish Us</h2>
      <p>
        Tell Us about your wish. We will do our best to work with perfection.
      </p>
      <form method="post" id="contact-form">
        <label for="cnt-name">Your Full Name:-</label>
        <input type="text" placeholder="Name" name="name" id="cnt-name" required />
        <label for="cnt-email">Your Email Address:-</label>
        <input type="email" placeholder="Email" name="email" id="cnt-email" required />
        <label for="cnt-drop">Wish Category:-</label>
        <select id="cnt-drop" name="category" required>
          <option value="" selected>- Select Your Category -</option>
          <option value="Web Development">Web Development</option>
          <option value="Software Development">Software Development</option>
          <option value="Graphics Design">Graphics Design</option>
          <option value="Web Design">Web Design</option>
          <option value="Video Editing">Video Editing</option>
          <option value="SEO">SEO</option>
        </select>
        <label for="budget">Your Budget:- &nbsp; (USD)</label>
        <input type="number" placeholder="Your Budget" name="budget" id="budget" min required>
        <label for="cnt-msg">Wish Details:-</label>
        <textarea placeholder="Give the full description of your work in order to achieve perfection." name="details"
          id="cnt-msg" required></textarea>
        <button name="submit" id="form-submit" type="submit">Send</button>
      </form>
    </div>
    <div class="jin">
      <img src="img/jin-2.png" alt="Image of a Jin">
    </div>
  </section>

  <footer>
    <div class="cont">
      <p>&copy; 2023 Logic Realm. All rights reserved.</p>
    </div>
  </footer>
</body>
<script src="script.js"></script>

</html>