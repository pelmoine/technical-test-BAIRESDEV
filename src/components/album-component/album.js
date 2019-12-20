import React from 'react'
import PropTypes from 'prop-types'
import Picture from '../picture-components/picture'

export const orderElement = (array) => {
  return array.sort( (a, b) => {
    return b.id - a.id
  })
}

export const getFirstsAlbumsPicture = (pictures, numberOfElement) => {
  const orderPictures = orderElement(pictures);
  orderPictures.splice(numberOfElement);
  return orderPictures;
 
}

function Album ({pictures}) {
  const picturesAlbum = getFirstsAlbumsPicture(pictures, 2);

  return (
    <div data-testid="album" style={{display:'flex', padding:'10px'}}>
      {picturesAlbum.map(picture => (
        <Picture key={picture.id} title={picture.title} url={picture.url} />
      ))}
    </div>
  )
}

export default Album

Album.propTypes ={
  pictures: PropTypes.arrayOf(PropTypes.shape({
    id : PropTypes.number,
    title: PropTypes.string,
    url: PropTypes.string
  })).isRequired,
}
