import {HttpClient} from "@angular/common/http";
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
    return this.http.get<any>(this.apiUrl + "/auth/verify");
  }

  letItBlink(): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/printer/led/blink", {
      frequency: 50,
      count: 20
    })
  }
}
