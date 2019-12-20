import React from 'react'
import PropTypes from 'prop-types'
import Image from '../image-component/image'
import Title from '../title-component/title'

function Picture ({title, url}) {

  return (
    <div style={{padding:'10px'}}>
      <Title title={title} />
      <Image url={url} />
    </div>
  )
}

export default Picture;

Picture.propTypes ={
    title: PropTypes.string.isRequired,
    url : PropTypes.string.isRequired,
}