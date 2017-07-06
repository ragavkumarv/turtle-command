import {NgModule} from '@angular/core';
import {MdButtonModule, MdCheckboxModule, MdInputModule, MdRadioModule, MdToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const MaterialModules =  [
  MdButtonModule,
  MdCheckboxModule,
  MdInputModule,
  MdRadioModule,
  MdToolbarModule
];

@NgModule({
  imports: [BrowserAnimationsModule, ...MaterialModules],
  exports: [...MaterialModules],
})
export class MyOwnCustomMaterialModule {}
