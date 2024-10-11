// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    const hq = 42;
    return Math.abs(distance - hq);
}

function distanceFromHqInFeet(distance) {
    const blocks = distanceFromHqInBlocks(distance)
    return blocks * 264;
}

function distanceTravelledInFeet(start, distance) {
    const blocksTravelled = Math.abs(start - distance);
    return blocksTravelled * 264;
}

function calculatesFarePrice(start, distance) {
    const distanceInFeet = distanceTravelledInFeet(start, distance)

    if (distanceInFeet <= 400) {
        return 0;
    }
    else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02;
    }
    else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}