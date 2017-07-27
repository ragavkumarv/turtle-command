import {__, add, assoc, cond, contains, equals, curry, lens, over, prop, set, view, reduce} from 'ramda';
import {cleanCmd} from './obstacle';
const xLens = lens(prop('posX'), assoc('posX'));
const yLens = lens(prop('posY'), assoc('posY'));
const dirLens = lens(prop('dir'), assoc('dir'));
const eq = equals;

export const forwards = (currPos) => {
  const overX = x => () => over(xLens, x, currPos);
  const overY = y => () => over(yLens, y, currPos);
  return cond([
    [eq('N'), overY(add(+1))],
    [eq('S'), overY(add(-1))],
    [eq('E'), overX(add(+1))],
    [eq('W'), overX(add(-1))],
  ])(view(dirLens, currPos));
};

export const turnLeft = (currPos) => {
  const _set = x => () => set(dirLens, x , currPos);
  return cond([
    [eq('N'), _set('W')],
    [eq('W'), _set('S')],
    [eq('S'), _set('E')],
    [eq('E'), _set('N')],
  ])(view(dirLens, currPos));
};

export const turnRight = (currPos) => {
  const _set = x => () => set(dirLens, x , currPos);
  return cond([
    [eq('N'), _set('E')],
    [eq('E'), _set('S')],
    [eq('S'), _set('W')],
    [eq('W'), _set('N')],
  ])(view(dirLens, currPos));
};


const outOfBound = ({posX, posY}, {gL, gW}) => {
  return (posX > gL || posX < 1 || posY > gW || posY < 1);
};

// export const updateTurtlePos = (gridDim, obstacles, currPos, cmd) => {
//   switch (cmd) {
//     case 'F':
//       const Fwd = forwards(currPos);
//       const {posX, posY} = Fwd;
//       return outOfBound(Fwd, gridDim) ? currPos :
//         contains({posX, posY}, obstacles) ? currPos : Fwd;
//     case 'R':
//       return turnRight(currPos);
//     case 'L':
//       return turnLeft(currPos);
//   }
// };
export const updateTurtlePos = (gridDim, obstacles, currPos, cmd) => {
  switch (cmd) {
    case 'F':
      const Fwd = forwards(currPos);
      const {posX, posY} = Fwd;
      return outOfBound(Fwd, gridDim) ? currPos :
        contains({posX, posY}, obstacles) ? currPos : Fwd;
    case 'R':
      return turnRight(currPos);
    case 'L':
      return turnLeft(currPos);
  }
};

export class Turtle {
  _gridDim: any;
  _obstacles: any;
  _initPos: any;
  _cmd: any;
  constructor(gridDim, obstacles, initPos, cmd) {
    this._gridDim = gridDim;
    this._obstacles = obstacles;
    this._initPos = initPos;
    this._cmd = cmd;
  }

  _updateTurtlePos(currPos, cmd) {
         switch (cmd) {
        case 'F':
          const Fwd = forwards(currPos);
          const {posX, posY} = Fwd;
          return outOfBound(Fwd, this._gridDim) ? currPos :
            contains({posX, posY}, this._obstacles) ? currPos : Fwd;
        case 'R':
          return turnRight(currPos);
        case 'L':
          return turnLeft(currPos);
      }
    }

  _move() {
    const turtlePosObs = curry(updateTurtlePos)(this._gridDim)(this._obstacles);
    // return reduce(turtlePosObs, this._initPos, cleanCmd(this._cmd));
    // console.log(reduce(this._updateTurtlePos, this._initPos, cleanCmd(this._cmd)));
    return reduce(this._updateTurtlePos, this._initPos, cleanCmd(this._cmd));
  }
}
