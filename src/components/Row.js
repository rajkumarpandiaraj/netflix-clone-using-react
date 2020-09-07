import React,{useState, useEffect} from 'react';
import axios from 'axios';
import '../assets/row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'


function Row(props) {
    const {url, title, isLarge} = props;
    const [movies, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('')
    const baseUrl = 'https://image.tmdb.org/t/p/original'
    useEffect(() => {
        axios.get(url)
        .then(res => {setMovie(res.data.results)
        console.log(res.data)})
        .catch(err => console.log(err))
        
    }, [url])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        },
    };
    const handleClick = (movie)=>{
        if(trailerUrl){
            setTrailerUrl('');
        }else{
            movieTrailer(movie?.name || '')
            .then(url =>{
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));

            }).catch(err => alert('OOPS, video not found'))
        }
    }
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_poster'>

            {
                movies.map(movie => (
                        <img className= {isLarge? 'row_poster_img larger': 'row_poster_img' } onClick={()=> handleClick(movie)}  key={movie.id} src={isLarge? `${baseUrl}${movie.poster_path}`: `${baseUrl}${movie.backdrop_path}`}alt={movie.title}/>
                ))
            }
            </div>
            {
                trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />
            }

        </div>
    )
}

export default Row
