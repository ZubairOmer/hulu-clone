import React, { useEffect, useState } from 'react'
import './Result.css'
import VedioCard from './VedioCard'
import axios from './axios'
import requests from './requests'

export default function Result() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchActionMovies)
            console.log(request);
        }
        fetchData();
    }, [])

    return (
        <div className='result'>
            {movies.map(movie => (
                <VedioCard />
            ))}
        </div>
    )
}
