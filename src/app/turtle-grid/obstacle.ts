import {compose, contains, curry, indexOf, reduce, toUpper, until, update} from 'ramda';
const randNum = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);

const randPair = ({gL, gW}) => ({
  posX: randNum(gL, 1),
  posY: randNum(gW, 1)
});
const obsIdx = (initPos, FinalPairs) => indexOf(initPos, FinalPairs);

const notContains = pairs => x => !contains(x, pairs);

const findUniq = curry(( gridDim, FinalPairs) => until(notContains(FinalPairs), x => randPair(gridDim))(randPair(gridDim)));

const randPairs = (griDim) => {
  const {gL, gW} = griDim;
  const newUniq = findUniq(griDim);
  const comp = compose(newUniq, randPairs);
  if (gW === 1 || gL === 1) {
    return [randPair(griDim)];
  }
  const newPair = comp({gL: gL - 1, gW: gW - 1});
  return [...newPair];
};


export const obstacles = (initPos, gridDim) => {
  const FinalPairs = randPairs(gridDim);
  const ObsIdx = obsIdx(initPos, FinalPairs);
  return (ObsIdx === -1) ?
    FinalPairs : update(ObsIdx, findUniq(gridDim, FinalPairs), FinalPairs);
};

export const splitStr = (str) => Array.from(str);
export const cleanCmd = compose(splitStr, toUpper);


