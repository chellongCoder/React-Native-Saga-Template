import React from 'react';
import {
  View,
  StatusBar,
  FlatList,
  ScrollView
} from 'react-native';
import HeaderMain from '../../util/HeaderMain';
import { tabModel } from '../../model/TabModel';
import BannerAdvertisement from '../../util/BannerAdvertisement';
import ListItem from '../../components/home-component/ListItem';
import styles from './home.styles';
import MenuMain from './MenuMain';
import { ProductCategoryProps } from '../product/types';
import { theme } from '../../theme';
interface Props {
  getDataProduct: ({ access_token, params }: { access_token: '' | undefined; params: object }) => void;
  getDataSliders: ({ access_token, params }: { access_token: '' | undefined; params: object }) => void;
  sliders: object[];
  products: [ProductCategoryProps];
  navigation: any;
}
interface State { }
class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.props.getDataProduct({ access_token: '', params: {} });
    this.props.getDataSliders({ access_token: '', params: {} });
  }

  render() {
    const { sliders, products, navigation } = this.props;
    return (
      <View style={styles.container}>
        <HeaderMain screen={tabModel.home} {...this.props} bgColor={theme.colors.green} />
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.styWrapHeader}>
            <MenuMain />
          </View>
          <View style={{ flex: 1, backgroundColor: '#FFF', zIndex: -1 }}>
            <View style={{ height: 20 }} />
            <BannerAdvertisement data={sliders} />
            <FlatList
              data={products}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }: { item: ProductCategoryProps }) =>
                <ListItem
                  navigation={navigation}
                  products={item.products}
                  name={item.name}
                  category_id={item.category_id}
                />
              }
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;
