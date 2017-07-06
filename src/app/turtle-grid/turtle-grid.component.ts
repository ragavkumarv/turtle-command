import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {compose, curry, reduce, toUpper} from 'ramda';
import {updateTurtlePos} from './movement';
import {cleanCmd, obstacles} from './obstacle';
import {initialPosChecker} from './position-checker';

@Component({
  selector: 'app-turtle-grid',
  templateUrl: './turtle-grid.component.html',
  styleUrls: ['./turtle-grid.component.sass']
})
export class TurtleGridComponent implements OnInit {
  form: FormGroup;
  @Output()
  finalPos = new EventEmitter<any>();
  @Output()
  obstacles = new EventEmitter<any>();
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      details: this.fb.group({
        gridLength            : [10, [Validators.required]],
        gridWidth            : [10, [Validators.required]],
        initialPosX          : [1, [Validators.required]],
        initialPosY          : [1, [Validators.required]],
        direction          : ['N', [Validators.required]],
        obstacles          : ['Y', [Validators.required]],
        command          : ['FFFRRFLF', [Validators.required, Validators.pattern('^[FRLfrl]*$')]],
      }, { validator: initialPosChecker})
    });
  }
 finalSubmit(form) {
    const details = form.value.details ;
    const {initialPosX: posX, initialPosY: posY, command: cmd, obstacles: obcheck} = details;
    const dir = toUpper(details.direction);
    const gridDim = {gL: details.gridLength, gW: details.gridWidth};
    const Obstacles =  obcheck === 'Y' ? obstacles({posX, posY}, gridDim) : [];
    const turtlePosObs = curry(updateTurtlePos)(gridDim)(Obstacles);
    const FinalPos = reduce(turtlePosObs, { posX, posY, dir}, cleanCmd(cmd));
    console.log(Obstacles);
    this.obstacles.emit(Obstacles);
    this.finalPos.emit(FinalPos);
   }
}
