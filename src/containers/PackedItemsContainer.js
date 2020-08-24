import { connect } from 'react-redux';

import { removeItem, toggleItem } from '../actions/items-actions';
import Items from '../components/Items';

const mapStateToProps = ({ items, filter }) => {
  return { items: items.filter(item => item.packed && item.value.includes(filter.packedItemsFilter)) };
}

const mapDispatchToProps = (dispatch) => ({
  onCheckOff(id) {
    dispatch(toggleItem(id));
  },
  onRemove(id) {
    dispatch(removeItem(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);