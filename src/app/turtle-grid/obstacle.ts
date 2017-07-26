import {compose, contains, curry, indexOf, reduce, toUpper, until, update, equals} from 'ramda';

const randNum = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);

const randPair = ({gL, gW}) => ({
  posX: randNum(gL, 1),
  posY: randNum(gW, 1)
});

export const splitStr = (str) => Array.from(str);
export const cleanCmd = compose(splitStr, toUpper);

export class Obstacle {
  _gridDim: any;
  _initPos: any;
  constructor(initPos, gridDim) {
    this._initPos = initPos;
    this._gridDim = gridDim;
  }

   _randPairs() {
    let {gL, gW} = this._gridDim;
    let FinalPairs = [];
    while ( gW > 1 && gL > 1) {
      let RandPair = randPair({gL, gW});
      // Create new pair until unique pair is found
      while (contains(RandPair, FinalPairs) || equals(RandPair, this._initPos)) {
        RandPair = randPair({gL, gW});
      }
      FinalPairs =  [...FinalPairs, RandPair];
      gW--; gL--;
    }
    return FinalPairs;
  }

}
