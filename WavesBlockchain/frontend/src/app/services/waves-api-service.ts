import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {BlockHeader} from "../shared/BlockHeader";
import {Block} from "../shared/Block";
import {Transaction} from "../shared/Transaction";
import {AddressBalance} from "../shared/AddressBalance";
import {Asset} from "../shared/Asset";
import {AddressAssetBalance} from "../shared/AddressAssetBalance";

@Injectable()
export class WavesApiService {

  private apiUrl = "http://nodes.wavesnodes.com";

  constructor(private http: HttpClient) {
  }

  /**
   * Retourniert die aktuelle Blockhöhe
   * @returns {Observable<any>}
   */
  getBlockchainHeight(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/blocks/height");
  }

  /**
   * Retourniert alle Blockheaders die innerhalb des gegebenen Intervalls liegen
   * @param {number} from
   * @param {number} to
   * @returns {Observable<BlockHeader[]>}
   */
  getBlockHeaders(from: number, to: number): Observable<BlockHeader[]> {
    return this.http.get<any>(this.apiUrl + "/blocks/headers/seq/" + from + "/" + to);
  }

  /**
   * Retourniert einen bestimmten Blockheader
   * @param {number} height
   * @returns {Observable<BlockHeader>}
   */
  getBlockHeader(height: number): Observable<BlockHeader> {
    return this.http.get<any>(this.apiUrl + "/blocks/headers/at/" + height);
  }

  /**
   * Retourniert einen gesamten Block
   * @param {number} height
   * @returns {Observable<Block>}
   */
  getBlock(height: number): Observable<Block> {
    return this.http.get<any>(this.apiUrl + "/blocks/at/" + height);
  }

  /**
   * Retourniert Detailinformationen zu einer gegebenen Transaktion
   * @param {string} id
   * @returns {Observable<Transaction>}
   */
  getTransactionInfo(id: string): Observable<Transaction> {
    return this.http.get<any>(this.apiUrl + "/transactions/info/" + id);
  }

  /**
   * Retourniert die Balance Informationen einer gegebenen Adresse
   * @param {string} address
   * @returns {Observable<AddressBalance>}
   */
  getAddressBalance(address: string): Observable<AddressBalance> {
    return this.http.get<any>(this.apiUrl + "/addresses/balance/details/" + address);
  }

  /**
   * Retourniert "limit" Transaktionen zu einer gegebenen Adresse
   * @param {string} address
   * @param {number} limit
   * @returns {Observable<any>}
   */
  getTransactions(address: string, limit: number): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/transactions/address/" + address + "/limit/" + limit);
  }

  /**
   * Retourniert Detailinformationen zu einem gegebenen Asset
   * @param {string} id
   * @returns {Observable<Asset>}
   */
  getAssetDetail(id: string): Observable<Asset> {
    return this.http.get<any>(this.apiUrl + "/assets/details/" + id);
  }


  /**
   * Retourniert die Balance eines spezifischen Assets einer Adresse
   * @param {string} address
   * @param {string} asset
   * @returns {Observable<AddressAssetBalance>}
   */
  getAddressAssetBalance(address: string, asset: string): Observable<AddressAssetBalance>{
    return this.http.get<any>(this.apiUrl + "/assets/balance/" + address + "/" + asset);
  }
}
