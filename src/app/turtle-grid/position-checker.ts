import { AbstractControl } from '@angular/forms';

export const initialPosChecker = (control: AbstractControl) => {
  const gridLength = control.get('gridLength');
  const gridWidth = control.get('gridWidth');
  const initialPosX = control.get('initialPosX');
  const initialPosY = control.get('initialPosY');
  if (!initialPosX || !gridLength || !initialPosY || !gridWidth) {
    console.log('pass check');
    return null;

  }
  if (initialPosX.value > gridLength.value || initialPosY.value > gridWidth.value) {
    console.log('check failed');
    return {nomatch: true};
  }
  console.log('pass check');
 return null;
};
