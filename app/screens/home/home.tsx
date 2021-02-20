import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, FlatList } from 'react-native';
import { withTheme } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import HeaderMain from '../../util/HeaderMain';
import { tabModel } from '../../model/TabModel';
import styles from './home.styles';
import MenuMain from './MenuMain';
import MenuContent from './MenuContent';

const Home = (props: any) => {
  const [t, i18n] = useTranslation();

  const i18 = (key: any) => {
    return t(key);
  };

  return (
    <View style={styles.container}>
      {/* <MenuHeader {...props} /> */}
      <HeaderMain screen={tabModel.home} {...props.screenProps} />
      <LinearGradient colors={['#4267B2', '#4267B2', '#4267B2', '#192f6a']} style={styles.styBorder} />
      <FlatList
        data={Array.from(Array(1).keys())}
        keyExtractor={(_item: any, index: any) => index.toString()}
        ListHeaderComponent={() => <MenuMain />}
        renderItem={() => <MenuContent />}
        style={styles.contaiMenu}
        stickyHeaderIndices={[0]}
      />
    </View>
  );
};

export default withTheme(Home);
