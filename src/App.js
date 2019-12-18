import React, { useState, useEffect } from 'react'
import './App.css'
import Image from './components/image/image-component'
import Title from './components/title/title-component'

export const getMapGroupBy = (arr, prop) => {
  if(!prop) return new Map();
  const map = new Map(Array.from(arr, obj => [obj[prop], []]))
  arr.forEach(obj => map.get(obj[prop]).push(obj))
  // return Array.from(map.values());
  return map
}

export const orderElement = (array) => {
  return array.sort( (a, b) => {
    return b.id - a.id
  })
}

export const orderResultsByAlbum = (map) => {
  return new Map([...map.entries()].sort( (a, b) => {
    return b[0] - a[0]
  }));
};

export const getThreeFirstResult = (map) => {
  const iterator = map.values();
  return [iterator.next().value, iterator.next().value, iterator.next().value];
}

export const getFirstsAlbumsPicture = (albumPicture, numberOfElement) => {
  return albumPicture.map(album => {
    const newElement = orderElement(album);
    newElement.splice(numberOfElement);
    album.id = album[0].albumId;
    return newElement;
  });
}

function App () {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        'https://jsonplaceholder.typicode.com/photos'
      )
      result.json()
        .then(results => {
          const albumResults = getMapGroupBy(results, 'albumId')
          const orderAlbums = orderResultsByAlbum(albumResults);
          const threeFirstAlbums = getThreeFirstResult(orderAlbums);
          console.log(threeFirstAlbums);

          const albumsWithOrderPicture = getFirstsAlbumsPicture(threeFirstAlbums, 2);

          setAlbums(albumsWithOrderPicture);
        })
        .catch(error => {
          console.error('Error during fetching data : ', error)
        })
    }
  fetchData()
  }, [])

  return (
    <div data-testid="app" className="App">
      <header />
      {
        albums.map((album) => (
          <div key={album.id} style={{display:'flex', padding:'10px'}}>
            {album.map(picture => (
              <div key={picture.id} style={{padding:'10px'}}>
                <Title title={picture.title} />
                <Image url={picture.url} />
              </div>
            ))}
          </div>
        ))
      }   
    </div>
  )
}

export default App
