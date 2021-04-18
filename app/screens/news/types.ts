export interface NewCategoryT {
  id: number;
  title: string;
}

export type CategoryByIdParamsT = {
  category_id: number;
  after_news_id?: number;
};

export interface ItemNewProps {
  item: NewCategoryT;
  index: number;
  active: number;
  onChangeTab: (index: number) => void;
}

export interface NewsByCategoryT {
  id: number;
  categoryId: number;
  userId: number;
  title: string;
  content: string;
  image: string;
  time: string;
  description: string;
}
