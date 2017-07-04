export const forwards = ({posX , posY, dir}) => {
  switch (dir) {
    case 'N':
      return Object.assign({}, { posX, posY: posY + 1, dir}) ;
    case 'S':
      return Object.assign({}, { posX, posY: posY - 1, dir}) ;
    case 'E':
      return Object.assign({}, { posX: posX + 1 , posY, dir}) ;
    case 'W':
      return Object.assign({}, { posX: posX - 1, posY, dir}) ;
  }
};

export const turnLeft = ({posX , posY, dir}) => {
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
  };

export const turnRight = ({posX , posY, dir}) => {
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
};

export const updateTurtlePos = (cmd, turtlePos) => {
  switch (cmd) {
    case 'F':
      return forwards(turtlePos);
    case 'R':
      return turnRight(turtlePos);
    case 'L':
      return turnLeft(turtlePos);
  }
};

