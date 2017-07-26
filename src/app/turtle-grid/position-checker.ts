import {AbstractControl} from '@angular/forms';

export const initialPosChecker = (control: AbstractControl) => {
  const gL = control.get('gL');
  const gW = control.get('gW');
  const posX = control.get('posX');
  const posY = control.get('posY');
  if (!posX || !gL || !posY || !gW) {
    return null;

  }
  if (posX.value > gL.value || posY.value > gW.value) {
    return {nomatch: true};
  }
 return null;
};


