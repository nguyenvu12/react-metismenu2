import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Item from '../containers/Item';

const SubContainer = ({ items, visible }, { classStore }) => (
  <div
    className={classnames(
        classStore.classSubContainer,
        visible && classStore.classSubContainerVisible
      )}
  >
    <ul
      className={classnames(
        classStore.classContainer,
        visible && classStore.classContainerVisible
      )}
    >
      {items.map((item, i) => (
        <Item key={i} {...item} />
      ))}
    </ul>
  </div>
);

SubContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  visible: PropTypes.bool,
};

SubContainer.contextTypes = {
  classStore: PropTypes.object.isRequired,
};

export default SubContainer;
