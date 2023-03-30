

function callElevator(elev1, elev2, floor) {
    const elevators = [elev1, elev2];
  
    let closesElev = 0;
    let minDistance = Infinity;
  
    elevators.forEach((elev) => {
      const distance = Math.abs(elev - floor);
      if (distance < minDistance) {
        closesElev = elev;
        minDistance = distance;
      } else if (distance === minDistance) {
        if (elev < closesElev) {
          closesElev = elev;
        }
      }
    });
    return closesElev;
  }
  
  console.log(callElevator(1, 1, 19));
  