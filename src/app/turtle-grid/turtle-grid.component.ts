import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {compose, curry, reduce, toUpper} from 'ramda';
import {Turtle, finalPosition} from './movement';
import {cleanCmd, Obstacle} from './obstacle';
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
  stepPos = new EventEmitter<any>();
  @Output()
  obstacles = new EventEmitter<any>();
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      details: this.fb.group({
        gL : [10, [Validators.required]], // Grid Length
        gW  : [10, [Validators.required]], // Grid Width
        posX       : [1, [Validators.required]],  // Initial posX
        posY: [1, [Validators.required]],         // Initial posY
        dir  : ['N', [Validators.required]],      // Initial facing direction
        obChk  : ['Y', [Validators.required]],    // Obstacle check
        cmd    : ['FFFRRFLF', [Validators.required, Validators.pattern('^[FRLfrl]*$')]], // Command
      }, { validator: initialPosChecker})
    });
  }
 finalSubmit(form) {
    const details = form.value.details;
    const {posX, posY, cmd, obChk, gL, gW} = details;
    const dir = toUpper(details.dir);
    const gridDim = {gL, gW};
    // End of Destructing
    const obstacles =  obChk === 'Y' ? new Obstacle({posX, posY}, gridDim)._randPairs() : [];
    const {FinalPos, StepPos} = finalPosition(gridDim, obstacles, {posX, posY, dir}, cmd);
    // Emit values
    this.obstacles.emit(obstacles);
    this.finalPos.emit(FinalPos);
    this.stepPos.emit(StepPos);
   }
}
