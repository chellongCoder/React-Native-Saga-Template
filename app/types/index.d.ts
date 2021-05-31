export interface UploadFileT {
  uri: string;
  type: string;
  name: string;
}

export type ProductRateT = {
  id: number;
  productId: number;
  userId: number;
  comment: string;
  name: string;
  createAt: string;
  image: string[];
  avatar: string;
};

export type BackgroundGradientT = {
  colors: string[];
  angle: number;
};

export interface ApiParamsT {
  url: string;
  token: string;
}

export type MasterDateT = {
  domains: {
    dev: string;
    nikkekin: string;
    hpv: string;
    bang: string;
    hyperion: string;
    nikkeikin: string;
    demo1: string;
    smg: string;
  };
  personGroup: {
    dev: string;
    nikkekin: string;
    hpv: string;
    bang: string;
    hyperion: string;
    nikkeikin: string;
    demo1: string;
    smg: string;
  };
  currency: {
    dev: string;
    nikkekin: string;
    hpv: string;
    bang: string;
    hyperion: string;
    nikkeikin: string;
    demo1: string;
    smg: string;
  };
};
