import { Component } from '@angular/core';

import { bounceAnimation } from 'angular-animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [bounceAnimation()],
})
export class AppComponent {

  animationState = false;

  animate() {
    this.animationState = !this.animationState;
  }

  foo(o: any) {

    console.log(o);

    let baz: SVGAnimateMotionElement = <any>document.getElementById('baz');

    console.log(baz);

    console.log(baz.getCurrentTime());
  }
}
