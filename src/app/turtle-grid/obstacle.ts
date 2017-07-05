import {forwards} from './movement';
export const boundaryCond = ({gridLength, gridWidth} , currPos) => {
 const  {posX , posY, dir} = forwards(currPos);
  return (posX > 1 && posY > 1 && posX < gridLength && posY < gridWidth);
};
const randNum = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);
// const randPair = (gL,gW) => ({X:randNum(gL,1),Y:randNum(gW,1)})
const randPair = (gL, gW) => ({
  X: randNum(gL, 1),
  get Y() {
    return this.X === gL ? randNum(gW, 1) : gL;
  }
});


const randPairs = (gL, gW) =>
  gW === 1 || gL === 1
    ? [randPair(gL, gW)]
    : [randPair(gL, gW)].concat(randPairs(gL - 1, gW - 1));

console.log(randPairs(7, 7));

export const obstacles = ({gridLength, gridWidth}, {posX , posY, dir}) => {

};

