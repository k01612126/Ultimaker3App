import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {SystemProperties} from "../shared/SystemProperties";
import {Printer} from "../shared/Printer";
import {PrintJob} from "../shared/PrintJob";
import {Http, Headers} from '@angular/http';


@Injectable()
export class UltimakerService {

  private apiUrl = "http://140.78.73.163/api/v1";

  constructor(private http: HttpClient) {
  }


  /**
   * Retourniert die aktuelle Blockhöhe
   * @returns {Observable<any>}
   */
  getPrinterName(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/system/name");
  }

  getSystemProperties(): Observable<SystemProperties> {
    return this.http.get<any>(this.apiUrl + "/system");
  }

  getPrinterStatus(): Observable<Printer>{
    return this.http.get<any>(this.apiUrl + "/printer");
  }
  getPrintJob(): Observable<PrintJob>{
    return this.http.get<any> (this.apiUrl + "/print_job");
  }

  requestAuthentication(application: string, user: string): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/auth/request", {
      application: application,
      user: user
    })
  }

  checkAcception(id: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/auth/check/"+id);
  }

  verifyAuthentication(): Observable<any> {

    return this.http.get<any>(this.apiUrl + "/auth/verify",{headers: new HttpHeaders().set('Authorization', 'Digest username="4694f65225e3e183bab42f71a405e102", realm="Jedi-API", nonce="7670fbff84636962c127681a81f92bb2", uri="/api/v1/auth/verify", response="0063683199ed86af52c6babf9e0dfa62", qop=auth, nc=00000002, cnonce="a4ae029a5ea3dc09"'
    )
        .set('Content-Type', 'application/json')});
  }
  letItBlink(): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/printer/led/blink", {
      frequency: 5,
      count: 20
    },{headers: new HttpHeaders().set('Authorization', 'Digest username="4694f65225e3e183bab42f71a405e102", realm="Jedi-API", nonce="683c2953e4f90cc9a23bce825ed74467", uri="/api/v1/printer/led/blink", response="a2ab58e79f40a1f5ca8751d14ae6b90e", qop=auth, nc=00000003, cnonce="447c97f4567f854a"')
        .set('Content-Type', 'application/json')})
  }

  startPrintJob(file: any): Observable<any> {
    return this.http.post<any> (this.apiUrl + "/print_job", {
      jobname: "asdfasdf",
      file: file
    }, {headers: new HttpHeaders().set('Authorization', 'Digest username="4694f65225e3e183bab42f71a405e102", realm="Jedi-API", nonce="683c2953e4f90cc9a23bce825ed74467", uri="/api/v1/printer/led/blink", response="a2ab58e79f40a1f5ca8751d14ae6b90e", qop=auth, nc=00000003, cnonce="447c97f4567f854a"')
        .set('Content-Type', 'application/json')})
  }
}
