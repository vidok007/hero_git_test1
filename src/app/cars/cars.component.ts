import { Component, OnInit } from '@angular/core';
//  ng generate component name --spec=false
// import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-cars',
  // selector: '[app-cars]',
  // selector: '.app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  // canAddCar = false;
  //  addCarsStatus = '';
   carName = '';
   addCarStatus = false;
  //  inputText = 'Default text';
   cars = ['Toyota', 'Ford', 'Mazda', 'BMW', 'Nissan'];
  //  items = [{id: 3,name: 'item1'},{id: 9,name: 'item2'},{id: 15,name: 'item3'}];
  dates = [
    new Date(2015, 3, 4),
    new Date(2013, 5, 8),
    new Date(2017, 7, 10),
    new Date(2018, 9, 5),
  ];

  constructor() { 

    // setTimeout(()=>{
    //   this.canAddCar = true;
    // },4000);
  }

  addCar(){
    // this.addCarsStatus = 'Car is added!';
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }

  /*setBigCarText(car: string){
    return car.length > 4 ? true : false;
  }*/

  ngOnInit() {
  }
  // onKeyUp(event:Event){
  //   // console.log(event);
  //   this.inputText = (<HTMLInputElement>event.target).value;
  // }

  /*onKeyUp(value){
       this.inputText = value;
     }*/

     /*onKeyUp(event){
      this.inputText = event.target.value;
    }*/
}
