import React from 'react'
import { useLocation } from "react-router-dom"
import './Detail.css'


function Detail() {
    const { state} = useLocation()
    return (
        <div className='main-detail'>
            <div className='detail'>
                <img alt='poster' className='detail-poster'  src={`http://image.tmdb.org/t/p/w500/${state.detail.backdrop_path}`} />
                <h2>{state.detail.original_title}</h2>
                <p>{state.detail.overview}</p>
                <p>Release date : {state.detail.release_date}</p>
                <p>Popularity: {state.detail.popularity}</p>
                <p>Average vote: {state.detail.vote_average}</p>
                <p>Total votes: {state.detail.vote_count}</p>
                <p>language : {state.detail.original_language}</p>
            </div>
        </div>
    )
}

export default Detail
