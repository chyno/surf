import {inject} from 'aurelia-framework';
import {computedFrom} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

let url = "/api/latestreading";
//let url = "readingsData";

let clearFields = function(reading) {
  reading.city = '';
  reading.speed = '';
  reading.direction = '';
  reading.reading = '';
  reading.zip = '';
}

@inject(HttpClient)
export class Reading{
  heading = 'Latest Reading';
  city = '';
  speed = '';
  direction = '';
  reading = '';
  zip = '';
 
  constructor(http){
    this.http = http;
  }
 
  canDeactivate() {
   return true;
    }
  
  activate() {
     this.zip = '22207';
      this.city = 'Arlington';
      this.speed = '23';
      this.direction = 'sw';
      this.reading = '11/29/2015';
}
}
export class UpperValueConverter {
  toView(value){
    return value && value.toUpperCase();
  }
}