
const API_KEY = 'a514e5022db69ea43b78a8355cc43719'

const requests = {
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchUpcoming : `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchLatest : `/movie/latest?api_key=${API_KEY}&language=en-US`,
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries : `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with`,
    fetchTvPopularShows : `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    // fetchYoutubeKey : `/movie/${ID}/video?api_key=${API_KEY}&language=en-US&page=1`,
}

export default requests;