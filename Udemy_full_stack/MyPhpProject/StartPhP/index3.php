<?php 

$userName = "Joe";
$isUserLogin = true;
$userAge = 19;

if ($isUserLogin && $userAge > 18) {
     echo "Hello ".$userName;
} else {
    echo "You have to login";
    }

echo "<br>";

for ($i = 0; $i < 10; $i++){
    echo $i." ";
    }

echo "<br>";

for ($i = 1; $i <= 25; $i = $i + 2){
        echo $i." ";
    }

echo "<br>";

for ($i = 10; $i >= 0; $i-- ){
    echo $i."<br>";
    }
    
echo "<br>";

$colors = array("red", "green", "yellow", "blue", "black", "white");

foreach ($colors as $key => $value){
    $colors[$key] = $value." color";
    echo $value. "<br>";
}

    print_r($colors);


?>