import React from 'react';
import PropTypes from 'prop-types';


function Title({title}) {

  return (
    <div>
      <span data-testid='title'>{title}</span>
    </div>
  );
}

export default Title;

Title.propTypes ={
  title: PropTypes.string.isRequired
}