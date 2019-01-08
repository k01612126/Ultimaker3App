import {Order} from "./Order";
import {Transfer} from "./Transfer";

export class Transaction {

  type: number;
  id: string;
  sender: string;
  senderPublicKey: string;
  fee: number;
  timestamp: number;
  signature: string;
  recipient: string;
  assetId: string;
  price: number;
  amount: number;
  buyMatcherFee: number;
  sellMatcherFee: number;
  name: string;
  height: number;
  status: string;
  version: number;
  attachment: string;
  transferCount: number;
  totalAmount: number;
  quantity: number;
  order1: Order;
  order2: Order;
  transfers: Transfer[];
  leaseId: string;
  description: string;
  decimals: number;
  reissuable: string;

}
