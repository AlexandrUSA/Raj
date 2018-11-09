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
