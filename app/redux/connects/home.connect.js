import { connect } from 'react-redux';
import { homeActionsCreator } from '../actions';
import Home from '../../screens/home/index';
function mapStateToProps({ products }) {
  return {
    products,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDataProduct: (payload) => dispatch(homeActionsCreator.getDataRequest(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
