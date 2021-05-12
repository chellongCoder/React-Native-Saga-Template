import { connect } from 'react-redux';
import { homeActionsCreator } from '../actions';
import HomeDetail from '../../screens/home/HomeDetail';
const mapStateToProps = (state) => {
  return {
    productDetail: state.HomeData.productDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDataProductDetail: (payload) => dispatch(homeActionsCreator.getDataProductDetailRequest(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeDetail);
