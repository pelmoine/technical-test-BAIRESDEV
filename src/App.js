import React, { useState, useEffect } from 'react'
import './App.css'
import Album from './components/album-component/album'

export const getMapGroupBy = (arr, prop) => {
  if(!prop) return new Map();
  const map = new Map(Array.from(arr, obj => [obj[prop], []]))
  arr.forEach(obj => map.get(obj[prop]).push(obj))
  return map
}

export const orderResultsByAlbum = (map) => {
  return new Map([...map.entries()].sort( (a, b) => {
    return b[0] - a[0]
  }));
};

export const getFirstAlbum = (map, nbFirstAlbum) => {
  const iterator = map.values();
  const threeFirstAlbum = [];
  for (let i = 0; i < nbFirstAlbum; i++) {
    const pictures = iterator.next().value;
    threeFirstAlbum.push({id: pictures[0].albumId,pictures}); 
  }
  return threeFirstAlbum;
}

export const getAlbums = (results, nbFirstAlbum) => {
  const albumResults = getMapGroupBy(results, 'albumId');
  const orderAlbums = orderResultsByAlbum(albumResults);
  return getFirstAlbum(orderAlbums, nbFirstAlbum);
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
          setAlbums(getAlbums(results, 3));
        })
        .catch(error => {
          console.error('Error during fetching data : ', error)
        })
    }
  fetchData()
  }, [])

  return (
    <div data-testid="app" className="App">
      {
        albums.map((album) => (
          <Album key={album.id} pictures={album.pictures} />
        ))
      }   
    </div>
  )
}

export default App
