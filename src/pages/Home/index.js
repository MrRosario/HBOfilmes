import React from "react";
import useFetch from "../../hooks/useFetch";
import Card from  '../../components/Card';
import './style.css'

const Home = () => {

    const API_KEY = process.env.REACT_APP_API_KEY;
    const data = useFetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`);

    if(!data.apiData){
        return null
    }

    let movies = data.apiData;
    console.log("Movie data: ", movies);

    return (
        <div className="home">
            <section className="main home-content">

                <div className="home-recent">
                    <h1>Filmes Recentes</h1>
                    <div className="moviesContainer">
                        {
                            movies.results.map((item) => {
                                const { id, poster_path, title } = item;
                                return(
                                    <Card 
                                        key={id}
                                        id={id}
                                        linkTo={`/movie/${id}`}
                                        poster_path={poster_path}
                                        title={title}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;