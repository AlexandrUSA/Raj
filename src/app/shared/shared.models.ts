export interface Card {
  title: string;
  imageSrc?: string;
  color?: string;
}

export interface CakeCard extends Card {
  id: string | number;
  price: number;
  minWeight: number;
}

export interface DescriptionCard extends Card {
  description: string;
}

export interface Basket {
  title: string;
  price: number;
}
