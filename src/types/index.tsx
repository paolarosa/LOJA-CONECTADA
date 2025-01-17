export interface Car {
  ad_id: number;
  model: {
    id: number;
    name: string;
  };
  manufacturer: {
    id: number;
    name: string;
  };
  model_year: number;
  price: number;
  fuel?: string;
  description?: string;
  photos: {
    photo: string;
    thumb: string;
    order: number;
  }[];
}

export interface CardProp {
  id: number;
  model: string;
  make: string;
  year: number;
  price: number;
  fuel?: string;
  description?: string;
  images: string[];
}

export interface Phone {
  ddd: number;
  phone: number;
  is_whatsapp: boolean;
  is_whatsapp_web: boolean;
}

export interface Dealer {
  name: string;
  logo: string;
  phones: Phone[];
}
