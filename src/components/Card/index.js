import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './style.css';

const Card = ({ id, poster_path, title, linkTo }) => {

    const [favorited, setFavorited] = useState(false);
    const [state, setSate] = useState(false);
    const IMG_PATH = 'https://image.tmdb.org/t/p/w200';

    const handleFavorite = () => {
        
        let storage = localStorage.getItem('favorite' + id || '0');

        if(!localStorage.getItem('favorites')){
            localStorage.setItem('favorites', JSON.stringify([]));
        }

        if(storage == null){
            localStorage.setItem('favorite' + id, JSON.stringify({
                'id': id, 
                'title': title,
                'image': poster_path,
                'linkTo': linkTo 
            }));
            setFavorited(true);
         
            let items = [];
            items = JSON.parse(localStorage.getItem('favorites'));
            items.push('favorite' + id);
            localStorage.setItem('favorites', JSON.stringify(items));
            
            setSate(!state);
        } else {
            localStorage.removeItem('favorite' + id);

            let items = [];
            items = JSON.parse(localStorage.getItem('favorites'));

            items.map((item, index) => {
                if(item === 'favorite' + id){
                   items.splice(index, 1);
                }
                return items;
            });

            localStorage.setItem('favorites', JSON.stringify(items));

            setFavorited(false);
            setSate(!state);
        }
        
    }

    return(
        <figure  className="card home-card">
            {
                localStorage.getItem('favorite' + id) || favorited ? (
                    <FullHeartIcon 
                        callBack={handleFavorite} 
                    />
                ): (
                    <EmptyHeartIcon 
                        callBack={handleFavorite} 
                    />
                )
            }
            <Link to={`/movie/${id}`}>
                <img src={IMG_PATH + poster_path} alt={title} />
                <figcaption>
                    {title}
                </figcaption>
            </Link>
        </figure>
    )
}

function FullHeartIcon({ callBack}){
    return(
        <div className="favorite-icon" onClick={callBack}>
            <svg xmlns="http://www.w3.org/2000/svg" width="180" height="190" viewBox="0 0 180 190" fill="none">
                <path d="M90 190C87.221 189.996 84.5073 189.036 82.212 187.244C48.2085 160.847 33.4847 142.747 25.3635 131.432C8.05678 107.31 -0.228837 82.5461 0.00480443 55.7284C0.277386 24.9969 21.8373 0 48.0657 0C67.1378 0 80.3472 12.2857 88.04 22.518C88.2837 22.8388 88.5848 23.0961 88.9229 23.2725C89.2611 23.4488 89.6284 23.54 90 23.54C90.3716 23.54 90.7389 23.4488 91.0771 23.2725C91.4152 23.0961 91.7163 22.8388 91.96 22.518C99.6529 12.2758 112.862 0 131.934 0C158.163 0 179.723 24.9969 179.995 55.7333C180.229 82.556 171.935 107.32 154.636 131.436C146.515 142.752 131.792 160.852 97.788 187.249C95.4922 189.039 92.7786 189.997 90 190Z" fill="#4710C1"/>
                <path d="M90 190C87.221 189.996 84.5073 189.036 82.212 187.244C48.2085 160.847 33.4847 142.747 25.3635 131.432C8.05678 107.31 -0.228837 82.5461 0.00480443 55.7284C0.277386 24.9969 21.8373 0 48.0657 0C67.1378 0 80.3472 12.2857 88.04 22.518C88.2837 22.8388 88.5848 23.0961 88.9229 23.2725C89.2611 23.4488 89.6284 23.54 90 23.54C90.3716 23.54 90.7389 23.4488 91.0771 23.2725C91.4152 23.0961 91.7163 22.8388 91.96 22.518C99.6529 12.2758 112.862 0 131.934 0C158.163 0 179.723 24.9969 179.995 55.7333C180.229 82.556 171.935 107.32 154.636 131.436C146.515 142.752 131.792 160.852 97.788 187.249C95.4922 189.039 92.7786 189.997 90 190Z" stroke="#4710C1"/>
            </svg>
        </div>
    )
}

function EmptyHeartIcon({ callBack }){
    return(
        <div className="favorite-icon" onClick={callBack}>
            <svg xmlns="http://www.w3.org/2000/svg" width="201" height="201" viewBox="0 0 201 201" fill="none">
                <path d="M145.674 10.0625C115.244 10.0625 100.245 42.7897 100.245 42.7897C100.245 42.7897 85.2458 10.0625 54.8162 10.0625C30.0862 10.0625 10.5029 32.634 10.2498 59.5674C9.73419 115.475 50.9023 155.233 96.0265 188.645C97.2705 189.569 98.7404 190.063 100.245 190.063C101.75 190.063 103.22 189.569 104.464 188.645C149.583 155.233 190.751 115.475 190.24 59.5674C189.987 32.634 170.404 10.0625 145.674 10.0625Z" stroke="#4710C1" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    )
}

export default Card;