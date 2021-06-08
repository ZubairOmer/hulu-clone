import React from 'react'
import './VedioCard.css'
import TextTruncate from 'react-text-truncate'
import { ThumbUpSharp } from '@material-ui/icons'

export default function VedioCard({ movie }) {
    const base_url = 'https://image.tmdb.org/t/p/original/' //for images
    return (
        <div className='vedioCard'>
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="" />
            <TextTruncate
                line={1}
                element='p'
                truncateText='...'
                text={movie.overview}
            />
            <h2>{movie.title || movie.original_name}</h2>
            <p className='vedioCard__stats'>
                {movie.media_type && `${movie.media_type} .`}
                {movie.release_date || movie.first_air_date}
                <ThumbUpSharp />
                {movie.vote_count}
            </p>
        </div>
    )
}
