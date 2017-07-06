import {compose, contains, curry, indexOf, reduce, toUpper, until, update} from 'ramda';
const randNum = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);

const randPair = (gL, gW) => ({
  posX: randNum(gL, 1),
  posY: randNum(gW, 1)
});
const notContainsCurr = pairs => x => !contains(x, pairs);

const randPairs = (gL, gW) => {
  if (gW === 1 || gL === 1) {
    return [randPair(gL, gW)];
  }
  const accPairs = randPairs(gL - 1, gW - 1);
  const notContains = notContainsCurr(accPairs);
  const newPair = until(notContains, x => randPair(gL, gW))(randPair(gL, gW));
  return [newPair].concat(accPairs);
};

const finalPairs = ({gL, gW}) => randPairs(gL, gW);

const obsIdx = (initPos, FinalPairs) => indexOf(initPos, FinalPairs);

const findUniq = ({gL, gW}, FinalPairs) => until(notContainsCurr(FinalPairs), x => randPair(gL, gW))(randPair(gL, gW));

export const obstacles = (initPos, gridDim) => {
  const FinalPairs = finalPairs(gridDim);
  const ObsIdx = obsIdx(initPos, FinalPairs);
  return (ObsIdx === -1) ?
    FinalPairs : update(ObsIdx, findUniq(gridDim, FinalPairs), FinalPairs);
};

export const splitStr = (str) => Array.from(str);
export const cleanCmd = compose(splitStr, toUpper);


