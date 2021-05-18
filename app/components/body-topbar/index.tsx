import React, { Fragment, memo } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icons, Images } from '../../constants';
import { useBodyTopbarStyle } from './styles';

interface Props {
  avatar?: string;
  message?: string;
  name?: string;
}
const _BodyTopbar = ({ avatar, message, name }: Props) => {
  const styles = useBodyTopbarStyle();
  const onSearchPress = () => {};
  const onNotifyPress = () => {};
  const onBasketPress = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.headBar}>
        {message !== '' && message && (
          <Fragment>
            <View style={styles.bubbleDot} />
            <View style={styles.thinking}>
              <Text style={styles.messThinking}>{message}</Text>
            </View>
          </Fragment>
        )}
      </View>
      <View style={styles.bottomBar}>
        <View style={styles.leftBar}>
          <Image
            source={avatar ? { uri: avatar ? avatar : Icons.ICON_BASKET_WHITE } : Images.AVATAR_DEFAULT}
            style={styles.avatar}
          />
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.rightBar}>
          <TouchableOpacity
            onPress={onSearchPress}
            style={styles.btnFeature}
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}>
            <Image source={Icons.ICON_SEARCH} style={styles.feature} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onNotifyPress}
            style={styles.btnFeature}
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}>
            <Image source={Icons.ICON_BELL} style={styles.feature} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onBasketPress}
            style={styles.btnFeature}
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}>
            <Image source={Icons.ICON_BASKET_WHITE} style={styles.feature} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const BodyTopbar = memo(_BodyTopbar);
