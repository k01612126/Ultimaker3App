export class Time {
  h:number;
  m:number;
  s:number;


  constructor(sec: number) {

    this.s = sec%60;
    this.m = (sec-this.s) / 60 % 60;

    this.h = (sec-this.s-this.m*60)/3600 ;
  }
}
