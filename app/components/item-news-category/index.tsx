import React, { memo, useCallback, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { newsActionsCreator } from '../../redux/actions';
import { ItemNewProps } from '../../screens/news/types';
import { Text } from '../text';
import { useItemNewsStyle } from './styles';

const _ItemNews = ({ item, index, active, onChangeTab }: ItemNewProps) => {
  const dispatch = useDispatch();
  const styles = useItemNewsStyle();

  const onPress = useCallback(() => {
    onChangeTab(index);
  }, [index, onChangeTab]);

  useEffect(() => {
    if (active === index) {
      dispatch(
        newsActionsCreator.getNewByCategoryRequest({
          category_id: item.id,
          after_news_id: 0,
        }),
      );
    }
  }, [active, dispatch, index, item.id]);
  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        fontType={active === index ? 'fontBold' : 'fontRegular'}
        style={[styles.textShared, active === index ? styles.textFocused : styles.textUnFocused]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

export const ItemNews = memo(_ItemNews);
