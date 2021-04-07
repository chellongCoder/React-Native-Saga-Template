import React, { memo, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { newsActionsCreator } from '../../redux/actions';
import { useNewsStyle } from './styles';

const _NewsScreen = ({}) => {
  const navigation = useNavigation();
  const styles = useNewsStyle();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(newsActionsCreator.getNewCategoryRequest());
  }, [dispatch]);
  return (
    <View>
      <Text>News Screen</Text>
    </View>
  );
};

export const NewsScreen = memo(_NewsScreen);
