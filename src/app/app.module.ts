import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StuffComponent } from './stuff/stuff.component';
import { DiamondComponent } from './diamond/diamond.component';
import { RoutingModule } from './routing.module';
import { AnimeDirective } from './anime/anime.directive';
import { AnimeComponent } from './anime/anime.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, RoutingModule],
  declarations: [
    AppComponent,
    DiamondComponent,
    StuffComponent,
    AnimeDirective,
    AnimeComponent,
  ],
  bootstrap: [AppComponent],
  exports: [AnimeDirective],
})
export class AppModule {}
