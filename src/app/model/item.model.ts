import {IProduct} from './product.model';

export interface IItem {
  product?: IProduct;
  weight?: number;
  active?: boolean;
}

export class Item implements IItem {
  constructor(public product?: IProduct, public weight?: number, public active?: boolean) {
    this.active = this.active || false;
  }
}
