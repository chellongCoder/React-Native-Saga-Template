import React from 'react';
import { View, FlatList, ScrollView } from 'react-native';
import _ from 'lodash';
import AsyncStorage from '@react-native-community/async-storage';
import HeaderMain from '../../util/HeaderMain';
import { tabModel } from '../../model/TabModel';
import BannerAdvertisement from '../../util/BannerAdvertisement';
import ListItem from '../../components/home-component/ListItem';
import { ProductCategoryProps } from '../product/types';
import { theme } from '../../theme';
import ListItemShimmer from '../../components/home-component/ElementShimmer';
import BannerAdvertisementShimmer from '../../util/BannerAdvertisementShimmer';
import { Text } from '../../components';
import RippleButtonAnim from '../../anim/RippleButtonAnim';
import { getToken } from '../../Common/Common';
import { alertMessage } from '../../util';
import MenuMain from './MenuMain';
import styles from './home.styles';
interface Props {
  getDataProduct: ({ access_token, params }: { access_token: '' | undefined; params: object }) => void;
  getDataSliders: ({ access_token, params }: { access_token: '' | undefined; params: object }) => void;
  getDataInfo: ({ token }: { token: string | null }) => void;
  sliders: object[];
  products: ProductCategoryProps[];
  isLoading: boolean;
  navigation: any;
  error: any;
}
interface State {}
class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(this.getData, 1000);
  }

  getData = () => {
    this.props.getDataProduct({ access_token: '', params: {} });
    this.props.getDataSliders({ access_token: '', params: {} });
    this.getUserInfo();
  };

  getUserInfo = async () => {
    const { token } = await getToken();
    this.props.getDataInfo({ token });
  };

  onPressLeft = () => {
    this.props.navigation.toggleDrawer();
  };

  changeComponent = () => {
    const { sliders, products, navigation, isLoading, error } = this.props;
    if (!_.isEmpty(error)) {
      return (
        <View style={styles.styWrapErr}>
          <RippleButtonAnim onPress={this.getData}>
            <Text style={styles.styTxtReload}>Tải lại</Text>
          </RippleButtonAnim>
        </View>
      );
    } else {
      return isLoading ? (
        <>
          <BannerAdvertisementShimmer />
          <ListItemShimmer />
        </>
      ) : (
        <>
          <BannerAdvertisement data={sliders} />
          <FlatList
            data={products}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }: { item: ProductCategoryProps }) => (
              <ListItem
                navigation={navigation}
                products={item.products}
                name={item.name}
                categoryId={item.categoryId}
              />
            )}
          />
        </>
      );
    }
  };

  render() {
    const { sliders, products, navigation, isLoading, error } = this.props;

    return (
      <View style={styles.container}>
        <HeaderMain
          onPressLeft={this.onPressLeft}
          screen={tabModel.home}
          {...this.props}
          bgColor={theme.colors.green}
        />
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.styWrapHeader}>
            <MenuMain />
          </View>
          <View style={{ flex: 1, backgroundColor: '#FFF', zIndex: -1 }}>
            <View style={{ height: 20 }} />
            {this.changeComponent()}
          </View>
        </ScrollView>
        <View style={styles.styFooter} />
      </View>
    );
  }
}

export default Home;
