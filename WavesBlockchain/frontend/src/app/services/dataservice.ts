import {BlockHeader} from "../shared/BlockHeader";
import {Injectable} from "@angular/core";
import {Transaction} from "../shared/Transaction";

@Injectable()
export class Dataservice {

  public blockHeader: BlockHeader;
  public transaction: Transaction;
}
