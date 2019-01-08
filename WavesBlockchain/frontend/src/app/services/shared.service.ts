import {Injectable} from "@angular/core";
import {Member} from '../shared/Member';

@Injectable()
export class SharedService {

  sharedValue: string;
  member: Member

  //Hilfsmethode für die Suche um über unterschiedliche Komponenten Daten auszutauschen
  publishSearchValue(sV: string) {
    this.sharedValue = sV;
  }

  //Hilfsmethode für Suche
  getSearchValue() {
    return this.sharedValue;
  }

  publishMember(m: Member) {
    this.member = m;
  }

  getMember() {
    return this.member;
  }
}
