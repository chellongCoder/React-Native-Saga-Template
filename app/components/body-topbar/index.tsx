import React, { memo } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icons, Images } from '../../constants';
import { useBodyTopbarStyle } from './styles';

interface Props {
  avatar?: string;
}
const _BodyTopbar = ({ avatar }: Props) => {
  const styles = useBodyTopbarStyle();
  const onSearchPress = () => {};
  const onNofitifyPress = () => {};
  const onBasketPress = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.headBar}>
        <View style={styles.bubbleDot} />
        <View style={styles.thinking}>
          <Text style={styles.messThinking}>
            Hi Willaotiexig, yesterday’s loss is today’s gain. Improve your skills for better chance at winning!
          </Text>
        </View>
      </View>
      <View style={styles.bottomBar}>
        <View style={styles.leftBar}>
          <Image
            source={avatar ? { uri: avatar ? avatar : Icons.ICON_BASKET_WHITE } : Images.AVATAR_DEFAULT}
            style={styles.avatar}
          />
          <Text style={styles.name}>shadow gate</Text>
        </View>
        <View style={styles.rightBar}>
          <TouchableOpacity onPress={onSearchPress}>
            <Image source={Icons.ICON_SEARCH} style={styles.feature} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onNofitifyPress}>
            <Image source={Icons.ICON_BELL} style={styles.feature} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onBasketPress}>
            <Image source={Icons.ICON_BASKET_WHITE} style={styles.feature} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const BodyTopbar = memo(_BodyTopbar);
