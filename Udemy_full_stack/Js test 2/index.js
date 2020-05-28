var startTime = new Date().getTime();

function getRandomColor() {
    var letters = "0123456789ABCDEF".split('');
    var color = "#";
    for (var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var makeKuboidVisible = function(){
    var cuboid = document.getElementById("cuboid");
    var top = Math.random() * 400;
    var left = Math.random() * 400;
    var widthCuboid = Math.random() * 250 + 50;
    cuboid.style.width = widthCuboid + "px"; 
    cuboid.style.top = top + "px";
    cuboid.style.left = left + "px";

    if (Math.random() < 0.3 ){
        cuboid.style.borderRadius = "50%";
        cuboid.style.backgroundColor = getRandomColor();
        cuboid.style.borderBottom = "0";
    } else if (Math.random() >= 0.3 && Math.random() <= 0.7 ) {
        cuboid.style.borderRadius = "0";
        cuboid.style.backgroundColor = getRandomColor();
        cuboid.style.borderBottom = "0";
    } else if (Math.random() > 0.7){
        cuboid.style.borderRadius = "0";
        cuboid.style.left = "0";
        cuboid.style.width = "0";
        cuboid.style.borderLeft = "50px solid transparent";
        cuboid.style.borderRight = "50px solid transparent";
        cuboid.style.borderBottom = "100px solid" + getRandomColor();
        cuboid.style.backgroundColor = "transparent";
    }
    cuboid.style.display = "block";
    startTime = new Date().getTime();
}

makeKuboidVisible();

console.log(startTime);
cuboid.onclick = function(){
    cuboid.style.display = "none";
    var finishTime = new Date().getTime();
    var reactionTime = (finishTime - startTime) / 1000;
    document.getElementById("reaction").innerHTML = reactionTime + "seconds";
    setTimeout(makeKuboidVisible, 500);
}
