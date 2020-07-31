<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>TDI Radio! 91.8MHz | No.1 HIT station - Početna</title>
        <link href="img/tdiimg.ico" rel="shortcut icon"  />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
        <link rel="stylesheet" href="css/style.css"/>
    </head>
    <body>
        <div class="container-fluid">

            <div class="row">

                <?php
                include './sections/header.php';
                ?>
                <!--********************************************************* home ***************************************************** -->
                <?php
                include './sections/home.php';
                ?>
                <!--********************************************************* section ***************************************************** -->

                <?php
                include './sections/progam.php';
                ?>
                <!--********************************************************* emisije ***************************************************** -->

                <?php
                include './sections/shows.php';
                ?>
                <!--********************************************************* kontakt ***************************************************** -->

                <?php
                include './sections/contact.php';
                ?>
                <!--********************************************************* playlista ***************************************************** -->
                <?php
                include './sections/radioList.php';
                ?>

                <!--************************************************************************ player *****************************************************-->
                <?php
                include './sections/player.php';
                ?>

            </div>
        </div>


        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        <script src="js/index.js"></script>
        <script src="js/dayScript.js"></script>
    </body>
</html>
