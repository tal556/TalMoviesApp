import React, { useState, useEffect } from "react";
import '../style/Banner.css'
import fetchAxios from "../axios";
import requests from "../requests";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await fetchAxios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * (request.data.results.length - 1))
        ]
      );

      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(str,n){
      return str?.length > n ? str.substr(0,n-1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
        backgroundPosition: "top center",
      }}
    >
      <div className="banner_contents">
          <h1 className="banner_title">
              {movie?.title || movie?.name || movie?.original_name}
          </h1>

          <div className="banner_buttons">
          {/* <Button variant="outline-secondary">Play</Button>
          <Button variant="outline-secondary">My List</Button> */}
              <button className="banner_button">Play</button>
              <button className="banner_button">My List</button>
          </div>
          <h1 className="banner_description">
              {truncate(movie?.overview , 150)}
          </h1>
      </div>
      <div className="banner_fadeBottom"></div>
    </header>
  );
}
