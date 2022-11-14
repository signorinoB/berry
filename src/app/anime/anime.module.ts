import { NgModule } from '@angular/core';
import { AnimeDirective } from './anime.directive';

@NgModule({
  declarations: [
    AnimeDirective,
  ],
  exports: [AnimeDirective],
})
export class AnimeModule { }