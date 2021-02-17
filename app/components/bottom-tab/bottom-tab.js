import React from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';
import { Text } from '../../components';
import { tabIcons } from '../../helpers';
import styles from './bottom-tab.styles';

function BottomTab(props) {
  const [t, i18n] = useTranslation();

  const i18 = (key) => {
    return t(key);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab}>
        {tabIcons.home}
        <Text style={styles.tabText}>{i18('Home')}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab}>
        {tabIcons.history}
        <Text style={styles.tabText}>{i18('History')}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab}>
        {tabIcons.qrcode}
        <Text style={styles.tabText}>{i18('QR_Code')}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab}>
        {tabIcons.news}
        <Text style={styles.tabText}>{i18('News')}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab}>
        {tabIcons.profile}
        <Text style={styles.tabText}>{i18('Profile')}</Text>
      </TouchableOpacity>
    </View>
  );
}

export { BottomTab };
