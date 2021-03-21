import React from 'react';
import { View, StatusBar } from 'react-native';
import HeaderMain from '../../util/HeaderMain';
import { tabModel } from '../../model/TabModel';
import BannerAdvertisement from '../../util/BannerAdvertisement';
import ListItem from '../../components/home-component/ListItem';
import styles from './home.styles';
import MenuMain from './MenuMain';
interface Props {
  getDataProduct: ({ access_token, params }: { access_token: '' | undefined; params: object }) => void;
  getDataSliders: ({ access_token, params }: { access_token: '' | undefined; params: object }) => void;
  sliders?: [object];
  products?: [object];
}
interface State {}
class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.props.getDataProduct({ access_token: '', params: {} });
    this.props.getDataSliders({ access_token: '', params: {} });
  }

  render() {
    const { sliders, products } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.styWrapHeader}>
          <HeaderMain screen={tabModel.home} {...this.props} />
          <MenuMain />
        </View>
        <View style={{ height: 20 }} />
        <BannerAdvertisement data={sliders} />
        <ListItem data={products} {...this.props} />
      </View>
    );
  }
}

export default Home;
