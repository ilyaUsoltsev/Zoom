export interface Lecture {
  id?: number;
  title: string;
  description: string;
  time: string;
  price?: number;
  keywords: string;
  imgUrl?: string;
  user?: User;
  platform: string;
  link: string;
}

export interface User {
  id: number;
  username: string;
  provider: string;
  confirmed: boolean;
  blocked?: any;
  role?: number;
  imgUrl?: string;
  created_at: string;
  updated_at: string;
}
