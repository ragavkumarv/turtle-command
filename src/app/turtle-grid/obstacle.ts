import {compose, contains, curry, indexOf, reduce, toUpper, until, update} from 'ramda';
const randNum = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);

const randPair = ({gL, gW}) => ({
  posX: randNum(gL, 1),
  posY: randNum(gW, 1)
});
const obsIdx = (initPos, FinalPairs) => indexOf(initPos, FinalPairs);

const notContains = pairs => x => !contains(x, pairs);
const findUniqPair = (gridDim, FinalPairs) => until(notContains(FinalPairs), x => randPair(gridDim))(randPair(gridDim));
const findUniqPairs = curry(( gridDim, FinalPairs) => [...FinalPairs, findUniqPair(gridDim, FinalPairs)]);

const randPairs = (gridDim) => {
  const {gL, gW} = gridDim;
  const newUniq = findUniqPairs(gridDim);
  const uniqPairs = compose(newUniq, randPairs);
  if (gW === 1 || gL === 1) {
    // console.log(gridDim, 'here');
    return [randPair(gridDim)];
  }
  return uniqPairs({gL: gL - 1, gW: gW - 1});
};


export const obstacles = (initPos, gridDim) => {
  const FinalPairs = randPairs(gridDim);
  // console.log(FinalPairs);
  const ObsIdx = obsIdx(initPos, FinalPairs);
  return (ObsIdx === -1) ?
    FinalPairs : update(ObsIdx, findUniqPair(gridDim, FinalPairs), FinalPairs);
};

export const splitStr = (str) => Array.from(str);
export const cleanCmd = compose(splitStr, toUpper);


