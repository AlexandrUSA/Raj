export interface Card {
  title: string;
  imageSrc?: string;
  color?: string;
}

export interface CakeCard extends Card {
  price: number;
  minWeight: number;
}

export interface DescriptionCard extends Card {
  description: string;
}

export interface Social {
  type: string;
  link: string;
}

export interface Reviewer {
  name: string;
  avatar: string;
  msisdn: string;
  review: string;
  social: Social[];
}

export interface Employee {
  name: string;
  position: string;
  avatar: string;
}

export interface Basket {
  title: string;
  price: number;
}
