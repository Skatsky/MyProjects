<?php

    include "db_connection.php";

    if(isset($_POST["submit"])){
        $email = $_POST["email"];
        $password = $_POST["password"];
        $username = $_POST["username"];  
        $id = $_POST["id"];

        $update_query = "UPDATE main_data SET username = '$username', email = '$email', password = '$password' WHERE id = '$id';";

        $update_query_result = mysqli_query($connection, $update_query);

        if (!$update_query_result){
            die("Query failed ".mysqli_error());
        }
    }

    $query = "SELECT * FROM main_data;";
    $query_result = mysqli_query($connection, $query);

    if (!$query_result){
        die("Query failed ".mysqli_error());
    }

?>  

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
  <form action="login_edit.php" method="post">
        <div class="form-group">
            <label for="exampleInputUserName1">User Name</label>
            <input type="text" class="form-control" name="username" id="exampleUserName1" aria-describedby="userNameHelp">
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" name="password" id="exampleInputPassword1">
        </div>
        <div class="form-group form-check">
                    <select name="id">
            <?php
                while($row = mysqli_fetch_assoc($query_result)){
                    $id = $row["id"];
                    echo "<option value='$id'>$id</option>";
                }
            ?>
        </select>
        </div>
        <button type="submit" name="submit" class="btn btn-primary">Submit</button>
    </form>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  </body>
</html>