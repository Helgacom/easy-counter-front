export interface IProduct {
  id?: number;
  name?: string;
  caloriesPer100g?: number;
  protein?: number;
  fat?: number;
  carb?: number;
  description?: string;
}

export class ProductModel implements IProduct {
  constructor(public id?: number,
              public name?: string,
              public caloriesPer100g?: number,
              public protein?: number,
              public fat?: number,
              public carb?: number,
              public description?: string) {}
}


