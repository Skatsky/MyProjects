<?php 

$colors = array("red", "orange", "green");
$colors[] = "yellow";

print_r($colors);

echo $colors[1];

echo "<br>";

$names[0] = "Jake";
$names[1] = "Jim";
$names[5] = "Jane";
$names["name"] = "Jim";
unset($names[5]);

echo "<br>";

echo sizeof($names);

echo "<br>";

print_r($names);

echo "<br>";

echo $names["name"];

echo "<br>";

$years["Jane"] = 1995;
$years["Jare"] = 1996;
$years["Jake"] = 1997;
$years["Jage"] = 1998;
print_r($years);

echo "<br>";



?>