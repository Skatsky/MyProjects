<?php 

// if (isset($_GET["number"])){
//     $value = $_GET["number"];

//     if (floor($value) == $value && is_numeric($value)){
//         if ($value % 2){
//             echo $value." id odd";
//         } else {
//             echo $value." is even";
//         }
//     } else {
//         echo "Input the whole number";
//     }
// }

$loginAndPasswordArray = array(
    "Maliwan" => "qweqwe",
    "Skatsky" => "qweqww",
    "Evpanax" => "qweqwq"
);

$isLoginAndPasswordCorrect = false;

if(isset($_POST["login"]) && isset($_POST["password"])){

    foreach ($loginAndPasswordArray as $key => $value) {
        if ($key == $_POST["login"] && $value == $_POST["password"]){
            $isLoginAndPasswordCorrect = true;
        }
    } 
    if ($isLoginAndPasswordCorrect){
        echo ("Hello ".$_POST["login"]."!");
    } else {
        echo ("Whrong login or passwod");
    }
}






?>

<p>Input your login and password: </p>

<form method="post">
    <p><input type="text" name="login"></p>
    <p><input type="text" name="password"></p>
    <p><input type="submit" name=""></p>
</form>