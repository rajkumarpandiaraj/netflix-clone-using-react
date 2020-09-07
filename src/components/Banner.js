import React,{useEffect, useState} from 'react';
import axios from 'axios';
import '../assets/banner.css'


function Banner(props) {
    const {url} = props;
    const [movies, setMovie] = useState({overview : '', name : ''});
    const baseUrl = 'https://image.tmdb.org/t/p/original'
    useEffect(() => {
        axios.get(url)
        .then(res => {
            const random = Math.floor(Math.random()*19)
            setMovie(res.data.results[random]);
        })
        .catch(err => console.log(err))
        
    }, [url])
let bgImg = ''
if(Object.keys(movies).length > 0){
    bgImg = `${baseUrl}${movies.backdrop_path}`;
    console.log(movies);
}
    return (
        <div style={{background : `url(${bgImg}) no-repeat top center / cover`,
                    height: '500px'}}>
                        <div className='info-grp' >
                            <div className='info-grp-overlay'>
                                <h1>{movies.name.toUpperCase()}</h1>
                                <div className='btn-grp'>
                                    <button className='btn'>Play</button>
                                    <button className='btn'>List</button>
                                </div>
                                <p>{movies.overview.length >200?  `${movies.overview.substring(0, 200)}...`: movies.overview}</p>
                            </div>
                        </div>
            <div className='fade'></div>
        </div>
    )
}

export default Banner
