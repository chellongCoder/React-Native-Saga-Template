import React, { memo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { screens } from '../../config';
import navigationService from '../../navigation/navigation-service';
import { NewsByCategoryT } from '../../screens/news/types';
import { Text } from '../text';
import { useItemNewStyle } from './styles';

const _ItemNew = ({ item }: { item: NewsByCategoryT }) => {
  const styles = useItemNewStyle();
  return (
    <TouchableOpacity
      style={[styles.viewItem, { backgroundColor: item?.color }]}
      hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
      onPress={() => {
        navigationService.navigate(screens.newsDetail, { item });
      }}>
      <View style={styles.viewContent}>
        <View style={styles.viewItemTitle}>
          <Text isLongText numberOfLines={2} style={styles.textTitle}>
            {item.title}
          </Text>
        </View>
        <View style={styles.viewDescription}>
          <Text isLongText numberOfLines={2} style={styles.textDescription}>
            {item.description}
          </Text>
        </View>
        <View style={styles.viewMore}>
          <Text isLongText numberOfLines={2} style={styles.textMore}>
            READ MORE
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const ItemNew = memo(_ItemNew);
