import React, { useState, useEffect } from 'react';
import fetchAxios from '../axios';
import '../style/Row.css'
import YouTube from 'react-youtube';
import axios from 'axios';

// import movieTrailer from "movie-trailer"

export default function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState('')
    const base_url = "https://image.tmdb.org/t/p/original"
    
    useEffect(() => {
        async function fetchData() {
            const request = await fetchAxios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl])
    
   function getKey(getMovie) {
    
        axios.get(`https://api.themoviedb.org/3/movie/${getMovie.id}/videos?api_key=a514e5022db69ea43b78a8355cc43719`)
        .then((res) =>{
            // console.log(res.data.results[0] || 'no key' );
            // console.log(res );
            return (
                res.data.results[0] ? res.data.results[0] : "no key"
            )
        })
        .then((res) => setTrailerUrl(res.key && res.key) )

    }


    // console.log(movies);

    const opts = {
        height: '420',
        width: '100%',
        playerVars: {
            origin: 'http://localhost:3000'

        },
        autoplay: 1,
    }


    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("")
        } else {
            getKey(movie)


            // the original method to get youtune trailer

            // movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
            // .then((url) =>{
            //     const urlParams = new URLSearchParams(new URL(url).search)
            //     setTrailerUrl(urlParams.get("v"))
            // }).catch((error) => console.log(error))
            
        }

    }

    return (
        <div className='row'>
            <h2 className="row_title">{title}</h2>
            <div className='row_posters'>

                {React.Children.toArray(movies.map(movie => (movie.poster_path &&
                    <img onClick={() => handleClick(movie)} className={`row_img ${isLargeRow && "row_imgLarge"} `} src={`${base_url}${ movie.poster_path}`} alt={movie.name || movie.title} />
                )))}

            </div>
            {trailerUrl && <YouTube className='youtube' videoId={ trailerUrl} opts={opts} />}
 
        </div>

    )
}
