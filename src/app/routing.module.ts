import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeComponent } from './anime/anime.component';
import { DiamondComponent } from './diamond/diamond.component';

const routes: Routes = [
  { path: '', component: DiamondComponent },
  { path: 'diamond', component: DiamondComponent },
  { path: 'anime', component: AnimeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
