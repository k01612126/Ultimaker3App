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

    return this.http.get<any>(this.apiUrl + "/auth/verify",{headers: new HttpHeaders().set('Authorization', 'Digest username="4694f65225e3e183bab42f71a405e102", realm="Jedi-API", nonce="04187a847e799c48f2ec4e4214a15d5c", uri="/api/v1/auth/verify", response="fdbdd48dcd61a530126a44e8dec851c8", qop=auth, nc=00000004, cnonce="e4c8bd89dbfbbb0a"'
    )
        .set('Content-Type', 'application/json')});
  }
  letItBlink(): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/printer/led/blink", {
      frequency: 5,
      count: 20
    },{headers: new HttpHeaders().set('Authorization', 'Digest username="4694f65225e3e183bab42f71a405e102", realm="Jedi-API", nonce="04187a847e799c48f2ec4e4214a15d5c", uri="/api/v1/printer/led/blink", response="316656f4cfce34752d3bb3cc0b7b7663", qop=auth, nc=00000005, cnonce="c2b4c21ebd76e4ba"')
        .set('Content-Type', 'application/json')})
  }

  startPrintJob(): Observable<any> {
    return this.http.post<any> (this.apiUrl + "/print_job", {
      jobname: "asdfasdf",
      file: "C:\Users\anjag\Documents\JKU\Bachelorstudium-WIN-5.Semester\CE KT\UM3_Pikachu_V2.gcode"
    }, {headers: new HttpHeaders().set('Authorization', 'Digest username="4694f65225e3e183bab42f71a405e102", realm="Jedi-API", nonce="d91232471f868f71d14199a4cbd83c12", uri="/api/v1/print_job", response="0a1b6f57ce9a515933424b37ac7f7eea", qop=auth, nc=00000002, cnonce="3f84ef6089ff35bc"')
        .set('Content-Type', 'application/json')})
  }

  messageDisplay(message:string, button:string): Observable<any>{
    return this.http.put<any>(this.apiUrl + "/system/display_message", {
      message: message,
      button_caption: button
    },{headers: new HttpHeaders().set('Authorization', 'Digest username="4694f65225e3e183bab42f71a405e102", realm="Jedi-API", nonce="04187a847e799c48f2ec4e4214a15d5c", uri="/api/v1/system/display_message", response="e2a9866b580534e06942b44f0e0e58cb", qop=auth, nc=00000006, cnonce="07554418635d7266"')

      .set('Content-Type', 'application/json')})
  }

  abortPrintJob():Observable<any>{
    return this.http.put<any>(this.apiUrl + "/print_job/state", {
      target: "abort"
    }, {headers: new HttpHeaders().set('Authorization', 'Digest username="4694f65225e3e183bab42f71a405e102", realm="Jedi-API", nonce="04187a847e799c48f2ec4e4214a15d5c", uri="/api/v1/print_job/state", response="82f6e57a2d0a74f0b5ad29e21771d74d", qop=auth, nc=00000002, cnonce="043c60096fe32ed4"')
        .set('Content-Type', 'application/json')})
  }

  pausePrintJob():Observable<any>{
    return this.http.put<any>(this.apiUrl + "/print_job/state", {
      target: "pause"
    }, {headers: new HttpHeaders().set('Authorization', 'Digest username="4694f65225e3e183bab42f71a405e102", realm="Jedi-API", nonce="04187a847e799c48f2ec4e4214a15d5c", uri="/api/v1/print_job/state", response="d53f37dd99cf4890418161fb047b61a9", qop=auth, nc=00000014, cnonce="8987b907e753f97f"')
        .set('Content-Type', 'application/json')})
  }

  resumePrintJob() :Observable<any>{
    return this.http.put<any>(this.apiUrl + "/print_job/state", {
      target: "print"
    }, {headers: new HttpHeaders().set('Authorization', 'Digest username="4694f65225e3e183bab42f71a405e102", realm="Jedi-API", nonce="04187a847e799c48f2ec4e4214a15d5c", uri="/api/v1/print_job/state", response="49c171147abbaa8a370dd9f6313c8de8", qop=auth, nc=00000015, cnonce="84fa06fa1ccb691d"')
        .set('Content-Type', 'application/json')})
  }
}
