import React from 'react'
import './VedioCard.css'

export default function VedioCard({ movie }) {
    const base_url = 'https://image.tmdb.org/t/p/original/' //for images
    return (
        <div className='vedioCard'>
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="" />
            <p>this film is about codding</p>
            <h2>Movie Title</h2>
            <p>Number of likes</p>
        </div>
    )
}
