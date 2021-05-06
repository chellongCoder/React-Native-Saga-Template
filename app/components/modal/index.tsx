import React, { memo, ReactNode } from 'react';
import { View, TouchableOpacity } from 'react-native';
import FadeZoomAnim from '../../anim/FadeZoomAnim';
import { COLORS } from '../../constants';
import { Text } from '../text';
import { useModalStyle } from './styles';

const _Modal = ({ component, onHide }: { component: ReactNode; onHide: () => void }) => {
  const styles = useModalStyle();
  return (
    <View style={styles.container}>
      <View>
        <FadeZoomAnim duration={200} style={styles.content}>
          {component}
          <TouchableOpacity onPress={onHide} style={styles.cancel}>
            <Text color={COLORS.WHITE}>X</Text>
          </TouchableOpacity>
        </FadeZoomAnim>
      </View>
    </View>
  );
};

export const Modal = memo(_Modal);
