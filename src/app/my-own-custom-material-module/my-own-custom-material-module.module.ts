import {NgModule} from '@angular/core';
import {MdButtonModule, MdCheckboxModule, MdInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const MaterialModules =  [
  MdButtonModule,
  MdCheckboxModule,
  MdInputModule,
];

@NgModule({
  imports: [BrowserAnimationsModule, ...MaterialModules],
  exports: [...MaterialModules],
})
export class MyOwnCustomMaterialModule {}
