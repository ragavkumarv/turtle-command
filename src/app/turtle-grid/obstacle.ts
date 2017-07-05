import {forwards} from './movement';
import {contains} from 'ramda';
export const boundaryCond = ({gridLength, gridWidth} , currPos) => {
 const  {posX , posY, dir} = forwards(currPos);
  return (posX > 1 && posY > 1 && posX < gridLength && posY < gridWidth);
};
const randNum = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);
// const randPair = (gL,gW) => ({X:randNum(gL,1),Y:randNum(gW,1)})
const randPair = (gL, gW) => ({
  X: randNum(gL, 1),
  Y: randNum(gW, 1)
});

const randPairs = (gL, gW) => {
  if (gW === 1 || gL === 1) {
    return [randPair(gL, gW)];
  }
  const accPairs = randPairs(gL - 1, gW - 1);
  let newPair = randPair(gL, gW);
  while (contains(newPair, accPairs)) {
    newPair = randPair(gL, gW);
  }
  return [newPair].concat(accPairs);
};

// const InitPosCheck = (InitPos,randObsPairs) => R.contains(InitPos,)
console.log(randPairs(9, 9));

export const obstacles = ({gridLength, gridWidth}, {posX , posY, dir}) => {

};

