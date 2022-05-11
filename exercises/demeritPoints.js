


function checkSpeed(speed) {
    let points;
    if (speed <= 74) {
        return 'ok'
    }

    points = (speed - 70) / 5
    points = Math.floor(points);
    if (points >= 12) {
        return 'Licence suspended'
    }
    return points + ' points';


}
let result = checkSpeed(95)
console.log(result);
