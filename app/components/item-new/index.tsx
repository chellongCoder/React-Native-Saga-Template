import React, { memo } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { screens } from '../../config';
import { COLORS } from '../../constants';
import navigationService from '../../navigation/navigation-service';
import { NewsByCategoryT } from '../../screens/news/types';
import { convertTimeToAMPM } from '../../util';
import { Text } from '../text';
import { useItemNewStyle } from './styles';

const _ItemNew = ({ item }: { item: NewsByCategoryT }) => {
  const styles = useItemNewStyle();
  return (
    <TouchableOpacity
      style={[styles.viewItem, styles.viewItemShadow]}
      hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
      onPress={() => {
        navigationService.navigate(screens.newsDetail, { item });
      }}>
      <View style={styles.viewImageWrapper}>
        <Image source={{ uri: item.image ? item.image : '' }} style={{ resizeMode: 'cover', flex: 1 }} />
      </View>

      <View style={styles.viewRight}>
        <View style={styles.viewItemTitle}>
          <View style={styles.viewTextTitle}>
            <Text isLongText numberOfLines={1} style={styles.textTitle}>
              {item.title}
            </Text>
          </View>
          <Text style={{ color: COLORS.GRAY }}>{convertTimeToAMPM(item.time.split(' ')[1])}</Text>
        </View>
        <View style={styles.viewTextContent}>
          <Text isLongText numberOfLines={2} style={{ color: COLORS.darkBlue }}>
            {item.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const ItemNew = memo(_ItemNew);
