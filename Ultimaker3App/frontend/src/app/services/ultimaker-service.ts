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

    return this.http.get<any>(this.apiUrl + "/auth/verify",{headers: new HttpHeaders().set('Authorization', 'Digest username="c0ec300894cbfa28b91f953a2ba3b4b8", realm="Jedi-API", nonce="87a4a4371c781df291a5096d4dd7a5d6", uri="/api/v1/auth/verify", response="be7595d2cc253c9a52388b17ed614930", qop=auth, nc=00000003, cnonce="6fee0ada089304f1"'
    )
        .set('Content-Type', 'application/json')});
  }
  letItBlink(frequency: number, count: number): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/printer/led/blink", {
      frequency: frequency,
      count: count
    },{headers: new HttpHeaders().set('Authorization', 'Digest username="c0ec300894cbfa28b91f953a2ba3b4b8", realm="Jedi-API", nonce="87a4a4371c781df291a5096d4dd7a5d6", uri="/api/v1/printer/led/blink", response="24675be40ac78655fe50fc5a9710cda7", qop=auth, nc=00000002, cnonce="591c1e1cf4cdd10e"')
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
    },{headers: new HttpHeaders().set('Authorization', 'Digest username="c0ec300894cbfa28b91f953a2ba3b4b8", realm="Jedi-API", nonce="2524d0b52fac603c2acf8221188c9cc0", uri="/api/v1/system/display_message", response="18f26e1b97fafb23cd5f53466130c54c", qop=auth, nc=00000002, cnonce="dcb3ca7f68167fe1"')

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
