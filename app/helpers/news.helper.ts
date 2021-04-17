import { NewCategoryT, NewsByCategoryT } from '../screens/news/types';

export const mapperNewsCategory = (data: any[]): NewCategoryT[] => {
  return data.map((value: any) => {
    return {
      id: value.id,
      title: value.name,
    };
  });
};

export const mapperNewsByCategory = (data: any[]): NewsByCategoryT[] => {
  return data.map((value: any) => {
    return {
      id: value.id,
      categoryId: value.category_id,
      content: value.content,
      time: value.created_at,
      image: value.image,
      title: value.title,
      userId: value.user_id,
      description: value.description,
    };
  });
};
