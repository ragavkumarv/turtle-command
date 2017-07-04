import { AbstractControl } from '@angular/forms';
import {forwards, turn} from './movement';

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
  console.log('forwards', forwards({posX: initialPosX.value, posY: initialPosY.value, dir: 'N' }));
  console.log('turn', turn('L', { posX: initialPosX.value, posY: initialPosY.value, dir: 'N' }));
 return null;
};
