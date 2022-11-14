import { Component } from '@angular/core';

@Component({
  selector: 'anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss'],
})
export class AnimeComponent {
  title = 'Property keyframes';
  animationOptions = {
    keyframes: [
      { translateY: -40 },
      { translateX: 250 },
      { translateY: 40 },
      { translateX: 0 },
      { translateY: 0 },
    ],
    duration: 4000,
    easing: 'easeOutElastic(1, .8)',
    loop: true,
  };
}
