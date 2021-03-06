import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ThemeModule } from './theme/theme.module';

import { AppComponent } from './app.component';
import {ThemeComponent} from "./theme/theme.component";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ThemeModule
  ],
  providers: [],
  bootstrap: [ ThemeComponent ]
})

export class AppModule { }
