import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {initialPosChecker} from './position-checker';
import {obstacles, splitStr} from './obstacle';
import {toUpper, compose, reduce, curry} from 'ramda';
import {updateTurtlePos} from './movement';

@Component({
  selector: 'app-turtle-grid',
  templateUrl: './turtle-grid.component.html',
  styleUrls: ['./turtle-grid.component.sass']
})
export class TurtleGridComponent implements OnInit {
  form: FormGroup;
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      details: this.fb.group({
        gridLength            : [10, [Validators.required]],
        gridWidth            : [10, [Validators.required]],
        initialPosX          : [1, [Validators.required]],
        initialPosY          : [1, [Validators.required]],
        direction          : ['N', [Validators.required, Validators.pattern('^[NSEWnsew]*$')]],
        command          : ['FFRL', [Validators.required, Validators.pattern('^[FRLfrl]*$')]],
      }, { validator: initialPosChecker})
    });
  }
 finalSubmit(form) {
    console.log(form.value);
    const gL = form.value.details.gridLength;
    const gW = form.value.details.gridWidth;
    const posX = form.value.details.initialPosX;
    const posY = form.value.details.initialPosY;
    const cmd: String = form.value.details.command;
    const dir: String = toUpper(form.value.details.direction);
    const cleanCmd = compose(splitStr, toUpper);
    const Obstacles = obstacles({posX, posY}, {gL, gW});
    const turtlePosObs = curry(updateTurtlePos)([]);
    console.log(turtlePosObs);
    const FinalPos = reduce(turtlePosObs, { posX, posY, dir}, cleanCmd(cmd));
    console.log(FinalPos);
    console.log(Obstacles, cleanCmd(cmd));
   }
}
