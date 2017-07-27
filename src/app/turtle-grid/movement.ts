import {__, add, assoc, cond, contains, equals, curry, lens, over, prop, set, view, reduce, map} from 'ramda';
import {cleanCmd} from './obstacle';
const xLens = lens(prop('posX'), assoc('posX'));
const yLens = lens(prop('posY'), assoc('posY'));
const dirLens = lens(prop('dir'), assoc('dir'));
const eq = equals;

export const finalPosition = (gridDim, obstacles, initPos, cmd) => {
  const turtle = new Turtle(gridDim, obstacles, initPos);
  const stepPos = map(x => { switch (x) {
    case 'F':
      turtle._forwards();
      return turtle.currPos();
    case 'R':
      turtle._turnRight();
      return turtle.currPos();
    case 'L':
      turtle._turnLeft();
      return turtle.currPos();
  }})(cleanCmd(cmd));
  console.log('stepPos', stepPos);
  return turtle.currPos();
};

export class Turtle {
  _gridDim: any;
  _obstacles: any;
  _initPos: any;
  _currPos: any;
  constructor(gridDim, obstacles, initPos) {
    this._gridDim = gridDim;
    this._obstacles = obstacles;
    this._initPos = initPos;
    this._currPos = initPos;
  }
   _forwards() {
    const overX = x => () => over(xLens, x, this._currPos);
    const overY = y => () => over(yLens, y, this._currPos);
    const {posX, posY} = this._currPos;
    const newPos = cond([
      [eq('N'), overY(add(+1))],
      [eq('S'), overY(add(-1))],
      [eq('E'), overX(add(+1))],
      [eq('W'), overX(add(-1))],
    ])(view(dirLens, this._currPos));
   this._currPos  = this._outOfBound(newPos) ? this._currPos :
                      contains({posX, posY}, this._obstacles) ? this._currPos : newPos;
  };
  _turnLeft() {
    const _set = x => () => set(dirLens, x , this._currPos);
    this._currPos =  cond([
      [eq('N'), _set('W')],
      [eq('W'), _set('S')],
      [eq('S'), _set('E')],
      [eq('E'), _set('N')],
    ])(view(dirLens, this._currPos));
  };
  _turnRight() {
    const _set = x => () => set(dirLens, x , this._currPos);
    this._currPos =  cond([
      [eq('N'), _set('E')],
      [eq('E'), _set('S')],
      [eq('S'), _set('W')],
      [eq('W'), _set('N')],
    ])(view(dirLens, this._currPos));
  };
  _outOfBound({posX, posY}) {
    return (posX > this._gridDim.gL || posX < 1 || posY > this._gridDim.gW || posY < 1);
  }
   currPos() {
   return this._currPos;
  }
}
