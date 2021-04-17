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
