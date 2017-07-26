import {__, add, assoc, cond, contains, equals, lens, over, prop, set, view} from 'ramda';
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

export const updateTurtlePos = (gridDim, Obstacles, currPos, cmd) => {
  switch (cmd) {
    case 'F':
      const Fwd = forwards(currPos);
      const {posX, posY} = Fwd;
      return outOfBound(Fwd, gridDim) ? currPos :
        contains({posX, posY}, Obstacles) ? currPos : Fwd;
    case 'R':
      return turnRight(currPos);
    case 'L':
      return turnLeft(currPos);
  }
};
