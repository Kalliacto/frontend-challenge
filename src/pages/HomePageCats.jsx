import React from 'react';
import CatsList from '../components/CatsList/CatsList';
import { useSelector } from 'react-redux';

const HomePageCats = (props) => {
    const { catsList } = useSelector((s) => s.cats);

    return (
        <div>
            <CatsList cats={catsList} />
        </div>
    );
};

export default HomePageCats;
