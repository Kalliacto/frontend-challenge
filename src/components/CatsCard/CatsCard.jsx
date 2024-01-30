import React from 'react';
import './style.css';
import { ReactComponent as Heart } from '../../assets/icon/heartFill.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addLike, removeLike } from '../../store/slices/catsSlice';

const CatsCard = ({ cat }) => {
    const { favoriteCats } = useSelector((s) => s.cats);
    let fav = favoriteCats.find((el) => el.id === cat.id);
    const dispatch = useDispatch();

    const favoriteToggle = () => {
        if (fav) {
            dispatch(removeLike(cat));
        } else {
            dispatch(addLike(cat));
        }
    };

    return (
        <div className='card'>
            <img className='card_img' src={cat.url} alt={cat.id} />
            <Heart className={`card_icon ${fav && 'favorite'} `} onClick={favoriteToggle} />
        </div>
    );
};

export default CatsCard;
