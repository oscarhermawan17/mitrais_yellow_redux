import React from 'react';
import PropTypes from 'prop-types';

const SimplePage = (props) =>
  <div className="simple_page">
      {props.title}
  </div>

SimplePage.propTypes = {
    title: PropTypes.string
};

export default SimplePage;