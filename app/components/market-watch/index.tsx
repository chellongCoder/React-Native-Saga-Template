import React, { memo, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../../constants';
import { mockData } from '../markets-watch/__mocks__/data';
import { useMarketWatchStyle } from './styles';

const _MarketWatch = ({
  configBackground = {
    colors: COLORS.MINT_GREEN_GRADIENT,
    angle: 108.66,
  },
}) => {
  const styles = useMarketWatchStyle();
  const [activeTab, setActiveTab] = useState(mockData.title[0].name);
  return (
    <View style={styles.container}>
      <View>
        <LinearGradient useAngle={true} {...{ ...configBackground }} style={styles.wrapAllTab}>
          {mockData.title.map((title: any) => (
            <View style={styles.headerTab}>
              <Text style={styles.textHeader}>{title.name}</Text>
            </View>
          ))}
        </LinearGradient>
        <View style={styles.overlayTab}>
          {mockData.title.map((title: any) => (
            <TouchableOpacity
              onPress={() => setActiveTab(title.name)}
              style={activeTab === title.name ? styles.tabOverlayActive : styles.headerTabOverlay}>
              <Text style={styles.textHeader}>{title.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.contentTab}>
          <Text>Content</Text>
        </View>
      </View>
    </View>
  );
};

export const MarketWatch = memo(_MarketWatch);
