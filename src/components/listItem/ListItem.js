import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {
  render() {
    const { title, description } = this.props;
    if (!title) {
      return null;
    }

    return (
      <div data-test="listItemComponent">
        <h2 data-test="componentTitle">{title}</h2>
        <p data-test="componentDescription">{description}</p>
      </div>
    );
  }
}

ListItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default ListItem;
