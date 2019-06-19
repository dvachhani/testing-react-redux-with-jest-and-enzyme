import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Headline extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { headline, desc } = this.props;

    if (!headline) {
      return null;
    }

    return (
      <div data-test="headlineComponent">
        <h1 className="headline" data-test="headline">
          {headline}
        </h1>
        <p data-test="description">{desc}</p>
      </div>
    );
  }
}

Headline.propTypes = {
  headline: PropTypes.string,
  desc: PropTypes.string,
  tempArr: PropTypes.arrayOf(
    PropTypes.shape({
      fName: PropTypes.string,
      lName: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.number,
      onlineStatus: PropTypes.bool
    })
  )
};

export default Headline;
