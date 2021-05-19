import React, { Fragment, memo } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, Icons, Images } from '../../constants';
import { useBodyTopbarStyle } from './styles';

interface Props {
  avatar?: string;
  message?: string;
  name?: string;
  children?: React.ReactNode;
}
const _BodyTopbar = ({ avatar, message, name, children }: Props) => {
  const styles = useBodyTopbarStyle();
  const onSearchPress = () => {};
  const onNotifyPress = () => {};
  const onBasketPress = () => {};
  return (
    <LinearGradient
      start={{ x: 0.0444, y: 0.0444 }}
      end={{ x: 1.097, y: 1.097 }}
      colors={COLORS.GREEN_GRADIENT}
      style={styles.container}>
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
          <Image source={avatar ? { uri: avatar ? avatar : Icons.DRAWER_03 } : Icons.DRAWER_03} style={styles.avatar} />
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.rightBar}>
          <TouchableOpacity
            onPress={onSearchPress}
            style={styles.btnFeature}
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}>
            <Image source={Icons.DRAWER_03} style={styles.feature} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onNotifyPress}
            style={styles.btnFeature}
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}>
            <Image source={Icons.DRAWER_03} style={styles.feature} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onBasketPress}
            style={styles.btnFeature}
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}>
            <Image source={Icons.DRAWER_03} style={styles.feature} />
          </TouchableOpacity>
        </View>
      </View>
      {children}
    </LinearGradient>
  );
};

export const BodyTopbar = memo(_BodyTopbar);
