import {AssetPair} from "./AssetPair";

export class Order {
  id: string;
  senderPublicKey: string;
  matcherPublicKey: string;
  orderType: string;
  price: number;
  amount: number;
  timestamp: number;
  expiration: number;
  matcherFee: number;
  signature: string;
  assetPair: AssetPair;
}
