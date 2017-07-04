import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurtleGridComponent } from './turtle-grid.component';

describe('TurtleGridComponent', () => {
  let component: TurtleGridComponent;
  let fixture: ComponentFixture<TurtleGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurtleGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurtleGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
