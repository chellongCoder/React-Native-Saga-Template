import React from 'react';
import { View, FlatList, ScrollView, RefreshControl } from 'react-native';
import _ from 'lodash';
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
  user: any;
}
interface State {
  refreshing: boolean;
  textSearch: string;
}
class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      refreshing: false,
      textSearch: '',
    };
  }

  componentDidMount() {
    setTimeout(this.getData, 350);
  }

  getData = () => {
    this.props.getDataProduct({ access_token: '', params: {} });
    this.props.getDataSliders({ access_token: '', params: {} });
  };

  onPressLeft = () => {
    this.props.navigation.toggleDrawer();
  };

  onChangeText = (value: string) => {
    this.setState({ textSearch: value });
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
    const { isLoading } = this.props;
    const { textSearch } = this.state;
    return (
      <View style={styles.container}>
        <HeaderMain
          onChangeText={this.onChangeText}
          onPressLeft={this.onPressLeft}
          screen={tabModel.home}
          value={textSearch}
          {...this.props}
          bgColor={theme.colors.green}
        />
        <ScrollView
          style={{ flex: 1 }}
          refreshControl={<RefreshControl refreshing={isLoading} onRefresh={this.getData} />}>
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
