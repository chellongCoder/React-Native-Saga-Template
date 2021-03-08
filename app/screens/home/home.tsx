import React from 'react';
import { View } from 'react-native';
import HeaderMain from '../../util/HeaderMain';
import { tabModel } from '../../model/TabModel';
import BannerAdvertisement from '../../util/BannerAdvertisement';
import styles from './home.styles';
import ListItem from './ListItem';
export default class Home extends React.Component {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  constructor(props: any) {
    super(props);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  componentDidMount() {
    this.props.getDataProduct({ access_token: null, params: {} });
    this.props.getDataSliders({ access_token: null, params: {} });
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  render() {
    const { products, sliders } = this.props;
    return (
      <View style={styles.container}>
        {/* <MenuHeader {...props} /> */}
        <HeaderMain screen={tabModel.home} {...this.props} />
        <BannerAdvertisement data={sliders} />
        <ListItem data={products} {...this.props} />
      </View>
    );
  }
}
