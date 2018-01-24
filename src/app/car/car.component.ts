import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  /*template:
  `
  <h2>Single Car</h2>
  `,*/

  styleUrls: ['./car.component.css']
  /*styles:[`
    h2{
      color:aqua;
    }
  `]*/
})
export class CarComponent implements OnInit {

 carName: string = 'Ford';
 carYear = 2017;

 getName()
 {
   return this.carName;
 }

  constructor() { }

  ngOnInit() {
  }

}
