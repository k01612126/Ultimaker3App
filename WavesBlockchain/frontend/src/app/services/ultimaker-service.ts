import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {SystemProperties} from "../shared/SystemProperties";
import {Printer} from "../shared/Printer";

@Injectable()
export class UltimakerService {

  private apiUrl = "http://140.78.73.150/api/v1";

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
}
