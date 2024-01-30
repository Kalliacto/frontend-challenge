import React from 'react';
import './style.css';
import { ReactComponent as Heart } from '../../assets/icon/favorite.svg';

const CatsCard = ({ cat }) => {
    return (
        // <div className={s.card}>
        //     <img className={s.card_img} src={cat.url} alt={cat.id} />
        //     <Heart className={s.card_icon} />
        // </div>
        <div className='card'>
            <img className='card_img' src={cat.url} alt={cat.id} />
            <Heart className='card_icon' />
        </div>
    );
};

export default CatsCard;
