var averageMike = (189 + 120 + 103) / 3;
var averageJohn = (129 + 94 + 123) / 3;
var averageMary = (97 + 134 + 105) / 3;
console.log(averageMike, averageJohn, averageMary);

if (averageMike > averageJohn && averageMike > averageMary) {
    console.log('Mike\'s average is highest and equal ' + averageMike);
}   else if (averageJohn > averageMike && averageJohn > averageMary) {
    console.log('John\'s average is highest and equal ' + averageJohn);
}   else if (averageMary > averageMike && averageMary > averageJohn) {
    console.log('Mary\'s average is highest and equal ' + averageMary);
}   else if (averageMike === averageJohn && averageMike === averageMary) {
    console.log('Everyone has an equal score ' + averageMike);
}   else if (averageMike === averageJohn) {
    console.log ('Mike\'s and John\'s average is highest and equal ' + averageMike);
}   else if (averageMike === averageMary) {
    console.log ('Mike\'s and Mary\'s average is highest and equal ' + averageMike);
}   else if (averageJohn === averageMary) {
    console.log ('John\'s and Mary\'s average is highest and equal ' + averageMike);
}