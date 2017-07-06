import {contains} from 'ramda';

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
  console.log((posX > gL || posX < 1 || posY > gW || posY < 1));
  return (posX > gL || posX < 1 || posY > gW || posY < 1);
};

export const updateTurtlePos = (gridDim, Obstacles, turtlePos, cmd) => {
    switch (cmd) {
    case 'F':
        const Fwd = forwards(turtlePos);

         return outOfBound(Fwd, gridDim) ? turtlePos :
                contains(Fwd, Obstacles) ? turtlePos : Fwd;
    case 'R':
      return turnRight(turtlePos);
    case 'L':
      return turnLeft(turtlePos);
  }
};

