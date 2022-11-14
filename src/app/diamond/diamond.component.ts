import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diamond',
  templateUrl: './diamond.component.html',
  styleUrls: ['./diamond.component.scss']
})
export class DiamondComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  foo(o: any) {

    console.log(o);

    let baz: SVGAnimateMotionElement = <any>document.getElementById('baz');

    console.log(baz);

    console.log(baz.getCurrentTime());
  }

}