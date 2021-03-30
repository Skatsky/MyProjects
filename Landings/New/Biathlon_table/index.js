let membersNum = document.querySelectorAll('.table__wrapper .members .member__num');
let membersNames = document.querySelectorAll('.table__wrapper .members .member__name');
let membersShots = document.querySelectorAll('.table__wrapper .members .member__shots');
let membersFr = document.querySelectorAll('.table__wrapper .members .member__fr');
let membersTotal = document.querySelectorAll('.table__wrapper .members .member__total-time');
let li = document.querySelectorAll('.members');
let input = document.querySelector('.search-field');
let tableWrapper = document.querySelectorAll('.table__wrapper .members .member__name');
let sort = document.querySelector('.sort');

let membersName = ['Oleh Prytotskyi', 'Ivan Prytotskyi', 'Roman Prytotskyi', 'Valerii Prytotskyi', 'Bohdan Prytotskyi', 'Victor Prytotskyi', 'Mukola Prytotskyi', 'Nick Prytotskyi', 'Jack Prytotskyi', 'Maxim Prytotskyi'];
let membersArr = [];
let membersAcc = [];
let shotRes = [];
let FR = [];
let raceTime = [];
let totalTime = [];
let shotsTotal = [];

input.addEventListener('keyup', myFunction);

function User(name, accuracy, fireRate, time, total) {
    this.name = name,
    this.accuracy = accuracy,
    this.shots = [],
    this.shotsTotal = shotsTotal,
    this.fireRate = fireRate,
    this.time = time,
    this.total = total;
}

function createMembersArr () {
    for (let i = 0; i < membersName.length; i++) {
        membersArr.push( new User(membersName[i], membersAcc[i], FR[i], raceTime[i], totalTime[i]));
    }
}

function getRandomAccuracy() {
    for (let i = 0; i < 10; i++) {
        membersAcc.push(Math.round(Math.random() * (83 - 73) + 73))
    }
}

function getRandomFR () {
    for (let i = 0; i < 10; i++) {
        FR.push(((Math.random() * (5 - 3) + 3).toFixed(1)) - 1 + 1)
    }
}

function getRandomTime () {
    for (let i = 0; i < 10; i++) {
        raceTime.push(((Math.random() * (28 - 22) + 22).toFixed(2)) - 1 + 1)
    }
}   

function getTotal () {
    for (let i = 0; i < raceTime.length; i++) {
        totalTime.push(raceTime[i]);
    }
}

function shotResult () {
    for (let i = 0; i < membersShots.length ; i++) {
        shotRes.push([]);
        shotsTotal.push([]);
        for (let j = 0; j < 5; j++) {
            if ((Math.round(Math.random() * 100)) < membersAcc[i]) {
                shotRes[i].push(true);
                membersArr[i]['shots'].push(true);
                shotsTotal[i].push(1);
            } else { 
                shotRes[i].push(false);
                membersArr[i]['shots'].push(false);
                totalTime[i] = totalTime[i] + 1;
                shotsTotal[i].push(0);
            }
        }
        membersArr[i]['shotsTotal'] = shotsTotal[i].reduce((a, b) => a + b)
        membersArr[i]['total'] = totalTime[i];
    }
}

function defaultSort () {
    membersArr.sort((a,b) => (a.total > b.total) ? 1 : ((b.total > a.total) ? -1 : 0));
    for (let i = 0; i < membersArr.length; i++) {
        membersNum[i].innerHTML = `<span>${i+1}</span>`;
        membersNames[i].innerHTML = `<span>${membersArr[i]['name']}</span>`;
        membersFr[i].innerHTML = `<span>${membersArr[i]['fireRate']}</span>`;
        membersTotal[i].innerHTML = `<span>${membersArr[i]['total']}</span>`;
        for (let j = 0; j < 5; j++) {
            if (membersArr[i]['shots'][j]) {
                membersShots[i].innerHTML += '<div class="member__shots-res res-true"></div>';
            } else {
                membersShots[i].innerHTML += '<div class="member__shots-res"></div>';
            }
        }
    }
}

function tableSort () {

    if (sort.value == "total-time") {
        document.querySelectorAll('.table__wrapper .members .member__shots .member__shots-res').forEach(e => e.parentNode.removeChild(e));
        membersArr.sort((a,b) => (a.total > b.total) ? 1 : ((b.total > a.total) ? -1 : 0));
            for (let i = 0; i < membersArr.length; i++) {
            membersNum[i].innerHTML = `<span>${i+1}</span>`;
            membersNames[i].innerHTML = `<span>${membersArr[i]['name']}</span>`;
            membersFr[i].innerHTML = `<span>${membersArr[i]['fireRate']}</span>`;
            membersTotal[i].innerHTML = `<span>${membersArr[i]['total']}</span>`;
            for (let j = 0; j < 5; j++) {
                if (membersArr[i]['shots'][j]) {
                    membersShots[i].innerHTML += '<div class="member__shots-res res-true"></div>';
                } else {
                    membersShots[i].innerHTML += '<div class="member__shots-res"></div>';
                }
            }
        }
    } else if (sort.value == "name") {
        document.querySelectorAll('.table__wrapper .members .member__shots .member__shots-res').forEach(e => e.parentNode.removeChild(e));
        membersArr.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        for (let i = 0; i < membersArr.length; i++) {
            membersNum[i].innerHTML = `<span>${i+1}</span>`;
            membersNames[i].innerHTML = `<span>${membersArr[i]['name']}</span>`;
            membersFr[i].innerHTML = `<span>${membersArr[i]['fireRate']}</span>`;
            membersTotal[i].innerHTML = `<span>${membersArr[i]['total']}</span>`;
            for (let j = 0; j < 5; j++) {
                if (membersArr[i]['shots'][j]) {
                    membersShots[i].innerHTML += '<div class="member__shots-res res-true"></div>';
                } else {
                    membersShots[i].innerHTML += '<div class="member__shots-res"></div>';
                }
            }
        }
    } else if (sort.value == "accuracy") {
        document.querySelectorAll('.table__wrapper .members .member__shots .member__shots-res').forEach(e => e.parentNode.removeChild(e));
        membersArr.sort((a,b) => (a.shotsTotal > b.shotsTotal) ? -1 : ((b.shotsTotal > a.shotsTotal) ? 1 : 0));
        for (let i = 0; i < membersArr.length; i++) {
            membersNum[i].innerHTML = `<span>${i+1}</span>`;
            membersNames[i].innerHTML = `<span>${membersArr[i]['name']}</span>`;
            membersFr[i].innerHTML = `<span>${membersArr[i]['fireRate']}</span>`;
            membersTotal[i].innerHTML = `<span>${membersArr[i]['total']}</span>`;
            for (let j = 0; j < 5; j++) {
                if (membersArr[i]['shots'][j]) {
                    membersShots[i].innerHTML += '<div class="member__shots-res res-true"></div>';
                } else {
                    membersShots[i].innerHTML += '<div class="member__shots-res"></div>';
                }
            }
        }
    } else if (sort.value == "fire-rate") {
        document.querySelectorAll('.table__wrapper .members .member__shots .member__shots-res').forEach(e => e.parentNode.removeChild(e));
        membersArr.sort((a,b) => (a.fireRate > b.fireRate) ? 1 : ((b.fireRate > a.fireRate) ? -1 : 0));
        for (let i = 0; i < membersArr.length; i++) {
            membersNum[i].innerHTML = `<span>${i+1}</span>`;
            membersNames[i].innerHTML = `<span class="aaa">${membersArr[i]['name']}</span>`;
            membersFr[i].innerHTML = `<span>${membersArr[i]['fireRate']}</span>`;
            membersTotal[i].innerHTML = `<span>${membersArr[i]['total']}</span>`;
            for (let j = 0; j < 5; j++) {
                if (membersArr[i]['shots'][j]) {
                    membersShots[i].innerHTML += '<div class="member__shots-res res-true"></div>';
                } else {
                    membersShots[i].innerHTML += '<div class="member__shots-res"></div>';
                }
            }
        }
    }
}

function myFunction() {
    let iv = input.value.toUpperCase();
    if (iv) {
        for (let i = 0; i < tableWrapper.length; i++) {
            let text = tableWrapper[i].innerText.toUpperCase();
            if (text.includes(iv) > 0) {
                li[i].style.display = 'flex';
            } else {
                li[i].style.display = 'none';
            }
        }
    } else {
        for (let i = 0; i < li.length; i++) {
            li[i].style.display = 'flex';
        }
    }
}

getRandomAccuracy();
getRandomFR();
getRandomTime();
createMembersArr();
getTotal();
shotResult();
defaultSort();





