import React from  'react';
import useFetch from '../../hooks/useFetch';
import { useParams } from "react-router-dom";
import './style.css';

const Movie = () => {

    const { id } = useParams();
    const API_KEY = process.env.REACT_APP_API_KEY;
    const IMG_PATH = 'https://image.tmdb.org/t/p/w300'
    const data = useFetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
    
    if(!data.apiData){
        return null
    }

    const { 
        poster_path,  
        title,
        release_date,
        genres,
        overview ,
        vote_average,
        spoken_languages
    } = data.apiData;

    const formatDate = () => {
  
        const myDate = new Date(release_date);
    
        const formatedDate = new Intl.DateTimeFormat("pt-BR", {
            year: "numeric",
            month: "long",
            day: "2-digit"
        }).format(myDate);
        
        console.log("formatedDate: ", formatedDate)
        return formatedDate
    }

    const renderValues = (valueType) => {
        return valueType.map((item, index, arr) => (
            <span key={index}>
                {item.name}
                {index !== (arr.length-1) ? ',' : ''}
            </span>
        ));
    }

    const movieDetails = [
        { name: 'DATA DE LANÇAMENTO', type: formatDate() },
        { name: 'GÊNEROS', type: genres },
        { name: 'IDIOMAS FALADOS', type: spoken_languages },
        { name: 'CLASSIFICAÇÃO', type: vote_average },
    ];

    console.log("data: ", data);

    return data && (
        <section className="main movie">
            <div className="movie-info">
                <img src={`${IMG_PATH}${poster_path}`} alt={title} />
                <div className="movie-info__details">
                    <h2>{title}</h2>

                    {
                        movieDetails.map((item, index) => {
                            return(
                                <div key={index} className="clearfix">
                                    <div className="detail__subheading">{item.name}: </div>
                                    <div className="detail__value">
                                        {
                                            Array.isArray(item.type) 
                                            ? renderValues(item.type)
                                            : item.type
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                    <div className="movie-info-overview">
                        <h3>SINOPSE</h3>
                        <p>{overview}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Movie;