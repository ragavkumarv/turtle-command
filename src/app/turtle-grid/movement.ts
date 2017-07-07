import {contains, lens, set, prop, add} from 'ramda';
const xLens = lens(prop('posX'));
const yLens = lens(prop('posY'));
const dirLens = lens(prop('dir'));

export const forwards = ({posX , posY, dir}) => {
  switch (dir) {
    case 'N':
      return Object.assign({}, { posX, posY: posY + 1, dir}) ;
    case 'S':
      return Object.assign({}, { posX, posY: posY - 1, dir}) ;
    case 'E':
      return Object.assign({}, { posX: posX + 1 , posY, dir}) ;
    case 'W':
      return Object.assign({}, { posX: posX - 1, posY, dir}) ;
  }
};

export const turnLeft = ({posX , posY, dir}) => {
    switch (dir) {
      case 'N':
        return Object.assign({}, {posX, posY, dir: 'W'});
      case 'W':
        return Object.assign({}, {posX, posY, dir: 'S'});
      case 'S':
        return Object.assign({}, {posX, posY, dir: 'E'});
      case 'E':
        return Object.assign({}, {posX, posY, dir: 'N'});
    }
  };

export const turnRight = ({posX , posY, dir}) => {
    switch (dir) {
      case 'N':
        return Object.assign({}, {posX, posY, dir: 'E'});
      case 'E':
        return Object.assign({}, {posX, posY, dir: 'S'});
      case 'S':
        return Object.assign({}, {posX, posY, dir: 'W'});
      case 'W':
        return Object.assign({}, {posX, posY, dir: 'N'});
    }
};


const outOfBound = ({posX, posY}, {gL, gW}) => {
  return (posX > gL || posX < 1 || posY > gW || posY < 1);
};

export const updateTurtlePos = (gridDim, Obstacles, turtlePos, cmd) => {
    switch (cmd) {
    case 'F':
        const Fwd = forwards(turtlePos);
        const {posX, posY} = Fwd;
         return outOfBound(Fwd, gridDim) ? turtlePos :
                contains({posX, posY}, Obstacles) ? turtlePos : Fwd;
    case 'R':
      return turnRight(turtlePos);
    case 'L':
      return turnLeft(turtlePos);
  }
};
// console.log(over(yLens, add(1), turtlePos));
