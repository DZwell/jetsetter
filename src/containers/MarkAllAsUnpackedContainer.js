import { connect } from 'react-redux';
import Application from '../components/Application';
import { markAllAsUnpacked } from '../actions/items-actions'

const mapStateToProps = state => state.items.map(x => x.packed = false);
const mapDispatchToProps = dispatch => {
  return {
    onMarkAllAsUnpacked: () => dispatch(markAllAsUnpacked())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Application)