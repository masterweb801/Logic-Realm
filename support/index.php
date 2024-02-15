<!DOCTYPE html>
<html>

<head>
    <title>Support | LogicRealm</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="style.css" />
    <link rel="canonical" href="https://www.logicrealm.xyz/support/index.php" />
    <link rel="icon" type="image/x-icon" href="../img/icon.ico" />
    <script src="https://kit.fontawesome.com/171e689b28.js" crossorigin="anonymous"></script>

    <style>
        .reply {
            background-color: #0082e6;
            color: white;
            padding: 6px 10px;
            margin-left: 50vw;
            border: none;
            cursor: pointer;
            border-radius: 12px;
            text-decoration: none;
        }

        .reply:hover {
            background-color: #2c3e50;
        }

        .reply-txt {
            margin-left: 40px;
        }

        .bind {
            margin: 30px;
        }

        #tog {
            margin-left: 70vw;
            font-size: 40px;
            margin-top: -10px;
            margin-bottom: 30px;
        }

        .mode-btn {
            text-decoration: none;
            color: var(--dark);
        }

        .no-support {
            width: 100%;
            height: 35vh;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 22px;
        }

        .rct-txt h3 {
            border-color: var(--dark);
        }
    </style>
</head>

<body>

    <nav>
        <div class="logo">Logic Realm</div>
        <input type="checkbox" id="click" />
        <label for="click" class="menu-btn">
            <i class="fas fa-bars"></i>
        </label>
        <ul>
            <li><a href="../index.html"><i class="fas fa-arrow-left"></i> &nbsp; Go to Home</a></li>
            <li><a class="active" href="#">Support</a></li>
        </ul>
    </nav>

    <section class="main">
        <div class="container">
            <a onclick="toggle()" class="mode-btn"><i class="fas fa-moon" id="tog"></i></a>
            <h2>Welcome to Logic Realm Support Forum</h2>
            <p>
                If you have any questions or issues you can post them here and we will get back to you as soon as
                possible.
            </p><br>

            <label class="rct-txt">
                <h3>&nbsp; Recent Posts</h3>
            </label>
            <br>

            <ul class="posts">
                <?php
                require "../api/_config.php";

                $sql = "SELECT * FROM `post`";
                $data = mysqli_query($conn, $sql);
                $total = mysqli_num_rows($data);

                if ($total > 0) {
                    $a = 1;
                    while ($a <= $total) {
                        $result = mysqli_fetch_assoc($data);
                        echo '
                        <li>
                            <h4>' . $result['subject'] . '</h4>
                            <p>
                                ' . $result['description'] . '
                            </p><br>
                            <p class="meta">Posted by ' . $result['name'] . ' on ' . $result['date'] . '</p>
                            <a href="reply.php?id=' . $result['id'] . '"><button class="reply">Reply</button></a>';

                        $sl = "SELECT * FROM `reply` WHERE `for_id` = " . $result['id'];
                        $dt = mysqli_query($conn, $sl);
                        $tol = mysqli_num_rows($dt);

                        if ($tol > 0) {
                            $c = 1;
                            while ($c <= $tol) {
                                $rlt = mysqli_fetch_assoc($dt);
                                $tick = "";
                                if ($rlt['name'] == "Owner") {
                                    $tick = '&nbsp; &nbsp; <i class="fa-solid fa-check" style="color: #2ad689; font-size: 25px;"></i>';
                                }
                                echo "
                                <li class='reply-txt'>
                                    <h4>" . $rlt['name'] . $tick . "</h4>
                                    <p>
                                        " . $rlt['description'] . "
                                    </p>
                                    <p class='meta'>Replied on " . $rlt['date'] . "</p>
                                </li>";
                                $c++;
                            }
                        }
                        ;

                        echo '</li><br><br>';
                        $a++;
                    }
                } else {
                    echo '<div class="no-support">No Posts To Show</div>';
                }
                ;

                if (isset($_POST['name'])) {
                    $name = $_POST['name'];
                    $subject = $_POST['subject'];
                    $description = $_POST['description'];
                    $sq = "INSERT INTO `post`(`name`, `subject`, `description`) VALUES ('" . $name . "','" . $subject . "','" . $description . "')";
                    mysqli_query($conn, $sq);
                }
                ;
                ?>
            </ul>

            <label class="rct-txt">
                <h3>&nbsp; Start a New Thread</h3>
            </label><br>

            <form method="post">
                <fieldset>
                    <div class="bind">
                        <label for="name"><b>Name:- </b></label>
                        <input type="text" name="name" id="name" placeholder="Your Name">
                        <label for="subject"><b>Subject:- </b></label>
                        <input type="text" name="subject" id="subject" placeholder="Subject">
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
    <script>
        var r = document.querySelector(':root');

        function dark_mode() {
            r.style.setProperty('--light', '#000');
            r.style.setProperty('--dark', '#f5f5f5');
            document.getElementById("tog").classList.add("fa-sun");
        };

        function light_mode() {
            r.style.setProperty('--light', '#f5f5f5');
            r.style.setProperty('--dark', '#000');
            document.getElementById("tog").classList.add("fa-moon");
        };

        function toggle() {
            var mode = document.getElementById("tog").classList.contains("fa-moon");
            if (mode == true) {
                document.getElementById("tog").classList.remove("fa-moon");
                dark_mode();
            } else if (mode == false) {
                document.getElementById("tog").classList.remove("fa-sun");
                light_mode();
            }
        };
    </script>
</body>

</html>