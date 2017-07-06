import {AbstractControl} from '@angular/forms';

export const initialPosChecker = (control: AbstractControl) => {
  const gridLength = control.get('gridLength');
  const gridWidth = control.get('gridWidth');
  const initialPosX = control.get('initialPosX');
  const initialPosY = control.get('initialPosY');
  if (!initialPosX || !gridLength || !initialPosY || !gridWidth) {
    return null;

  }
  if (initialPosX.value > gridLength.value || initialPosY.value > gridWidth.value) {
    return {nomatch: true};
  }
 return null;
};


