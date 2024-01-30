import React from 'react';
import { useSelector } from 'react-redux';
import CatsList from '../components/CatsList/CatsList';
import { NavLink } from 'react-router-dom';

const FavoritePageCats = (props) => {
    const { favoriteCats } = useSelector((s) => s.cats);

    return (
        <div>
            {favoriteCats.length ? (
                <CatsList cats={favoriteCats} />
            ) : (
                <div>
                    У вас пока нет любымых котиков...
                    <NavLink to={'/frontend-challenge/'} className='link'>
                        Выбрать любимца
                    </NavLink>{' '}
                </div>
            )}
        </div>
    );
};

export default FavoritePageCats;
