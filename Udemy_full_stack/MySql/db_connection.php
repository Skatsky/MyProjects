<?php

    $connection = mysqli_connect("localhost", "root", "", "my_sql");

    if(!$connection){            
        die("connection failed");
    }
?>