import { connect } from 'react-redux';
import { homeActionsCreator, authActionsCreator } from '../actions';
import Home from '../../screens/home/index';
const mapStateToProps = (state) => {
  return {
    products: state.HomeData.products,
    sliders: state.HomeData.sliders,
    isLoading: state.HomeData.isLoading,
    error: state.HomeData.error,
    user: state.AuthData.tempData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDataProduct: (payload) => dispatch(homeActionsCreator.getDataRequest(payload)),
    getDataSliders: (payload) => dispatch(homeActionsCreator.getDataSlidersRequest(payload)),
    getDataInfo: (payload) => dispatch(authActionsCreator.userInfoRequest(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
