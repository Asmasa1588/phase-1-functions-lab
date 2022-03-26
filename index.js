// Code your solution in this file!
function distanceFromHqInBlocks(param) {
  if (param < 43) {
    return 8;
  }
  return param - 42;
}

function distanceFromHqInFeet(param) {
  return distanceFromHqInBlocks(param) * 264;
}
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}
function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination);
  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
