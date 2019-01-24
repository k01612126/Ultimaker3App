export class Time {
  h:number;
  m:number;
  s:number;


  constructor(sec: number) {
    this.h = sec/3600;
    this.m = (sec-this.h*3600) / 60 ;
    this.s = sec - this.h * 3600 - this.m * 60;
  }
}
