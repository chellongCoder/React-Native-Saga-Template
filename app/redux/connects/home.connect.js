import { connect } from 'react-redux';
import { homeActionsCreator } from '../actions';
import Home from '../../screens/home/index';
const mapStateToProps = (state) => {
  return {
    products: state.HomeData.products,
    sliders: state.HomeData.sliders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDataProduct: (payload) => dispatch(homeActionsCreator.getDataRequest(payload)),
    getDataSliders: (payload) => dispatch(homeActionsCreator.getDataSlidersRequest(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
