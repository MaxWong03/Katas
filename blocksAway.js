let taxi = {
  position: [0, 0],
  direction: undefined,
  turnRight: (num) => {
    switch (taxi.direction) {
      case 'n':
        taxi.direction = 'e';
        taxi.position = [taxi.position[0], taxi.position[1] + num];
        break;
      case 'e':
        taxi.direction = 's';
        taxi.position = [taxi.position[0] - num, taxi.position[1]];
        break;
      case 's':
        taxi.direction = 'w';
        taxi.position = [taxi.position[0], taxi.position[1] - num];
        break;
      case 'w':
        taxi.direction = 'n';
        taxi.position = [taxi.position[0] + num, taxi.position[1]];
        break;
      default:
        taxi.direction = 'e';
        taxi.position = [taxi.position[0], taxi.position[1] + num];
    }
    // console.log(`Position: ${taxi.position}, Direction: ${taxi.direction}`);


  },
  turnLeft: (num) => {
    switch (taxi.direction) {
      case 'n':
        taxi.direction = 'w';
        taxi.position = [taxi.position[0], taxi.position[1] - num];
        break;
      case 'e':
        taxi.direction = 'n';
        taxi.position = [taxi.position[0] + num, taxi.position[1]];
        break;
      case 's':
        taxi.direction = 'e';
        taxi.position = [taxi.position[0], taxi.position[1] + num];
        break;
      case 'w':
        taxi.direction = 's';
        taxi.position = [taxi.position[0] - num, taxi.position[1]];
        break;
      default:
        taxi.direction = 'n';
        taxi.position = [taxi.position[0] + num, taxi.position[1]];
    }
    // console.log(`Position: ${taxi.position}, Direction: ${taxi.direction}`);
  },
  fromStart: () =>{
    const posEN =  {east: taxi.position[1], north: taxi.position[0]};
    [taxi.position, taxi.direction] = [[0,0], undefined];
    return posEN;
  }
}

const blocksAway = (directions) => {
  for (let i = 0; i < directions.length; i+=2) {
    let [direction, step] = [directions[i], directions[i + 1]];
    switch (direction) {
      case 'right':
        taxi.turnRight(step);
        break;
      default:
        taxi.turnLeft(step);
    }
  }
  return taxi.fromStart();
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
// console.log(makeGrid());
