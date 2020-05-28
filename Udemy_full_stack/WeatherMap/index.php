<?php 

    error_reporting(E_ERROR | E_PARSE);

    $weather = "";

    $error = "";

    if(isset($_GET["city"])){

      $urlContent = file_get_contents("https://api.openweathermap.org/data/2.5/weather?q=".$_GET["city"]."&units=metric&appid=c3dc70c5b1b61bc6ef71cfdce1f43e98");

      $forCastArray = json_decode($urlContent, true);

      if(isset($forCastArray["cod"]) == 200) {

        $weather = 'The weather in '.$_GET["city"].' is '.$forCastArray["weather"][0]["description"]; 

        $weather = $weather.". The temperature is ".$forCastArray["main"]["temp"]."&#8451;".". The speed of wind is ".$forCastArray["wind"]["speed"]."m/sec";

      } else {

        $error = "The city name is incorrect or we have not your city in our database, please input correct city name";

      }
    }

?>

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="style/style.css" type="text/css">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <title>Weather Map</title>
  </head>
  <body class="text-primary">

    <div class="container" id="mainDiv">
        <h1>Weather In The City</h1>

        <form>
            <div class="form-group">
                <input class="form-control" id="city" name="city" aria-describedby="Forcast city" placeholder="Enter city name">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>

    <div id="alertDiv">
      <?php

        if ($weather){
          echo '<div class="alert alert-primary" role="alert">'.$weather.'</div>;';
        } else if ($error) {
          echo '<div class="alert alert-danger" role="alert">'.$error.'</div>;';
        };
        

      ?>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  </body>
</html>