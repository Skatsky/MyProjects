/* function tipsCalculator (billAmount) {
    var percentage; 
    if (billAmount < 50) {
        percentage = 0.2;
    } else if (billAmount >= 50 && billAmount < 200) {
        percentage = 0.15;
    } else if (billAmount >= 200) {
        percentage = 0.1;
    } return percentage * billAmount;
}

var billsArray = [124, 48, 268];
var tips = [
    tipsCalculator(billsArray[0]),
    tipsCalculator(billsArray[1]),
    tipsCalculator(billsArray[2])
]
var finalSum = [
    billsArray[0] + tips[0],
    billsArray[1] + tips[1],
    billsArray[2] + tips[2]
]

console.log(tips, finalSum); */





var john = {
    name: 'John',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.sum = [];

        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = 0.2;
            } else if (bill >=50 && bill < 200) {
                percentage = 0.15;
            } else {
                percentage = 0.1;
            }

            this.tips[i] = bill * percentage;
            this.sum[i] = bill + bill * percentage;
        }
    }
}


var mark = {
    name: 'Mark',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.sum = [];

        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = 0.2;
            } else if (bill >=100 && bill < 300) {
                percentage = 0.1;
            } else {
                percentage = 0.25;
            }

            this.tips[i] = bill * percentage;
            this.sum[i] = bill + bill * percentage;
        }
    }
}

function averCalc(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++){
        sum += tips[i];
    } 
    return sum / tips.length;
}

john.calcTips();
mark.calcTips();

john.average = averCalc(john.tips);
mark.average = averCalc(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.name + '\'s family pays higher tips, with an average of $' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.name + '\'s family pays higher tips, with an average of $' + mark.average);
}


