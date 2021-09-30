import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { Link } from "react-router-dom";
import './style.css';

const Favorites = () => {

    const [favorites, setFavorites] = useState([])
    const getArray = JSON.parse(localStorage.getItem('favorites') || 0);

    useEffect(()=> {
        if(getArray !== 0){
            setFavorites([...getArray])
        }
    },[]);

    const getData = () => {
       return favorites.map(item => {
            let data = JSON.parse(localStorage.getItem(item) || '');
            return data
        })
    }

    return(
        <section className="main favorites">
            <h1>Filmes Favoritos</h1>
            <div className="moviesContainer">
                {
                    getData().map((item) => {
                        const { id, image, linkTo, title } = item;
                        return(
                            <Card 
                                key={id}
                                id={id}
                                linkTo={linkTo}
                                poster_path={image}
                                title={title}
                            />
                        )
                    })
                }
                {
                    getData().length === 0 && (
                        <h4 className="favorite-warning">
                            Lista vazia, por favor volta 
                            para a página de 
                            <Link to={`/`}>Início</Link> 
                            e favorite um filme
                        </h4>
                    )
                }
            </div>
        </section>
    )
}

export default Favorites;