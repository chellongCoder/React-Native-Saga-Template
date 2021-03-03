import { connect } from 'react-redux';
import { homeActionsCreator } from '../actions';
import Home from '../../screens/home/index';
function mapStateToProps({ products }) {
  return {
    products,
  };
}

const mapDispatchToProps = homeActionsCreator;

export default connect(mapStateToProps, mapDispatchToProps)(Home);
