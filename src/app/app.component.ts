import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app works!';
  FinalPos;
  StepPositions = [];
  Obstacles = [];
  showPos(finalPos) {
    this.FinalPos = finalPos;
  }
  showStepPos(stepPos) {
    this.StepPositions = stepPos;
  }
  showObs(Obstacles) {
    console.log(Obstacles);
    this.Obstacles = Obstacles;
  }
}
