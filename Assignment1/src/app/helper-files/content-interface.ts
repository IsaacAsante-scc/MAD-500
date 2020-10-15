export interface Content{
  id: number;
  author: string;
  imagUrl?: string;
  type?: string;
  title: string;
  body: string;
  tags?: [string];
}

