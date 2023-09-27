import React, { useEffect, useState } from 'react'
import './Banner.css'
import tmdbAxiosinstance from '../tmdbAxiosinstance';

function Banner({fetchUrl}) {
    const [movie,setMovie]=useState({})
  const base_url = "https://image.tmdb.org/t/p/original/";
    // console.log(fetchUrl)
    const fetchData =async ()=>{
      const {data} = await tmdbAxiosinstance.get(fetchUrl)
    //   setmovie(data.results)
    console.log(data.results[Math.floor(Math.random()*data.results.length)]);
    setMovie(data.results[Math.floor(Math.random()*data.results.length)])
    }

    console.log(movie);
    useEffect(()=>{
      fetchData()
    },[])
  return (
    <div className='banner' style={{
        height:'600px',
        backgroundSize:'cover',
        backgroundImage:`url(${base_url}/${movie.backdrop_path})`,
        backgroundAttachment:'fixed'
    }}>
      <div className="banner_content">
        <h1>{movie?.name}</h1>
        <h2>{movie?.overview?.slice(0,280)}...</h2>
      </div>
    </div>
  )
}

export default Banner
