import { connect } from 'react-redux';

import { updatePackedItemsFilter } from '../actions/filter-actions';
import Filter from '../components/Filter';

const mapStateToProps = ({ filter }) => {
  return {
    value: filter.packedItemsFilter,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateFilter(value) {
    dispatch(updatePackedItemsFilter(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);