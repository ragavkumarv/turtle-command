# Turtle Command

Turtle is on a N * N grid, with N obstacles. The turtle can only move F orward one position
and can turn L eft or R ight. The grid has 4 directions N, E, W, S

      N  
    W   E
      S
      

Assuming that the initial position of turtle is 1, 1 (bottom left corner of the grid facing North) and
the grid has random obstacles in a few of its cells, given the movement instructions, find the
final position of turtle and printing the grid state will be an added plus. When there is an
obstacle, movement is not possible.

## Solution
The main logic are files:  
src/turtle-grid/movement.ts  
src/turtle-grid/obstacle.ts  
src/turtle-grid/position-checker   

## Installation
clone repo  
npm install  
ng serve  
Goto `http://localhost:4200/`

## Note
 If ng serve doesnot works  
 npm install -g @angular/cli  
 More details `https://cli.angular.io/`
 
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

