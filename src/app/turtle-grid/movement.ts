export const forwards = ({posX , posY, dir}) => {
  switch (dir) {
    case 'N':
      return Object.assign({}, { posX, posY: posY + 1, dir}) ;
    case 'S':
      return Object.assign({}, { posX, posY: posY - 1, dir}) ;
    case 'E':
      return Object.assign({}, { posX: posX + 1 , posY, dir}) ;
    case 'W':
      return Object.assign({}, { posX: posX - 1, posY: posY + 1, dir}) ;
  }
};

export const turn = (LorR, {posX , posY, dir}) => {
  if (LorR === 'L') {
    switch (dir) {
      case 'N':
        return Object.assign({}, {posX, posY, dir: 'W'});
      case 'W':
        return Object.assign({}, {posX, posY, dir: 'S'});
      case 'S':
        return Object.assign({}, {posX, posY, dir: 'E'});
      case 'E':
        return Object.assign({}, {posX, posY, dir: 'N'});
    }
  }
  if (LorR === 'R') {
    switch (dir) {
      case 'N':
        return Object.assign({}, {posX, posY, dir: 'E'});
      case 'E':
        return Object.assign({}, {posX, posY, dir: 'S'});
      case 'S':
        return Object.assign({}, {posX, posY, dir: 'W'});
      case 'W':
        return Object.assign({}, {posX, posY, dir: 'N'});
    }
  }
};
