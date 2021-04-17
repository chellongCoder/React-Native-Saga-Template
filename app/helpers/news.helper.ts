import { NewCategoryT } from '../screens/news/types';

export const mapperNewsCategory = (data: any[]): NewCategoryT[] => {
  return data.map((value: any) => {
    return {
      id: value.id,
      title: value.name,
    };
  });
};
