import {add, assoc, contains, lens, over, prop, set, view} from 'ramda';
const xLens = lens(prop('posX'), assoc('posX'));
const yLens = lens(prop('posY'), assoc('posY'));
const dirLens = lens(prop('dir'), assoc('dir'));

export const forwards = (currPos) => {
  switch (view(dirLens, currPos)) {
    case 'N':
      return over(yLens, add(1), currPos) ;
    case 'S':
      return over(yLens, add(-1), currPos) ;
    case 'E':
      return over(xLens, add(1), currPos) ;
    case 'W':
      return over(xLens, add(-1), currPos) ;
  }
};

export const turnLeft = (currPos) => {
    switch (view(dirLens, currPos)) {
      case 'N':
        return set(dirLens, 'W', currPos) ;
      case 'W':
        return set(dirLens, 'S', currPos);
      case 'S':
        return set(dirLens, 'E', currPos);
      case 'E':
        return set(dirLens, 'N', currPos);
    }
  };

export const turnRight = (currPos) => {
    switch (view(dirLens, currPos)) {
      case 'N':
        return set(dirLens, 'E', currPos);
      case 'E':
        return set(dirLens, 'S', currPos);
      case 'S':
        return set(dirLens, 'W', currPos);
      case 'W':
        return set(dirLens, 'N', currPos);
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
