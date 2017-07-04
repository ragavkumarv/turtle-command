import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-turtle-grid',
  templateUrl: './turtle-grid.component.html',
  styleUrls: ['./turtle-grid.component.sass']
})
export class TurtleGridComponent implements OnInit {
  turtleForm: FormGroup;
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.turtleForm = this.fb.group({
      gridLength            : [10, [Validators.required]],
      gridWidth            : [10, [Validators.required]],
      initialPosX          : [1, [Validators.required]],
      initialPosY          : [1, [Validators.required]],
      command          : ['FFRL', [Validators.required]],
    });
  }

}
