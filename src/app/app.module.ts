import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { TurtleGridComponent } from './turtle-grid/turtle-grid.component';
import {MyOwnCustomMaterialModule} from './my-own-custom-material-module/my-own-custom-material-module.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TurtleGridComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
   FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
