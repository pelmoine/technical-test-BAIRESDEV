import React from 'react';
import PropTypes from 'prop-types';


function Image({url}) {

  return (
    <div>
      <img 
        src={url}
        alt="new"
        data-testid='image'
      />
    </div>
  );
}

export default Image;

Image.propTypes ={
  url: PropTypes.string.isRequired
}
