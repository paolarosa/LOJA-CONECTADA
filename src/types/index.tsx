
export interface Car {
  ad_id: number;
  title: string;
  description: string;
photos: {
    photo: string;
    thumb: string;
    order: number;
  }[];
}

export interface CardProp {
  id: number;
  title: string;
  description: string;
  images: string[]
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
