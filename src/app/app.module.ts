import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StuffComponent } from './stuff/stuff.component';


@NgModule({
  imports: [BrowserModule, 
    BrowserAnimationsModule, FormsModule],
  declarations: [AppComponent, HelloComponent, StuffComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
