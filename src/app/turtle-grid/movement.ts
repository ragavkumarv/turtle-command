import {add, assoc, contains, lens, over, prop, set, view, __} from 'ramda';
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
  const _set = set(dirLens, __, currPos);
    switch (view(dirLens, currPos)) {
      case 'N':
        return _set('W') ;
      case 'W':
        return _set('S');
      case 'S':
        return _set('E');
      case 'E':
        return _set('N');
    }
  };

export const turnRight = (currPos) => {
    const _set = set(dirLens, __, currPos);
    switch (view(dirLens, currPos)) {
      case 'N':
        return _set('E');
      case 'E':
        return _set('S');
      case 'S':
        return _set('W');
      case 'W':
        return _set('N');
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
