import React from 'react';
import s from './style.module.css';
import CatsCard from '../CatsCard/CatsCard';

const CatsList = ({ cats }) => {
    return <div className={s.cats_list}>{!!cats.length && cats.map((el, i) => <CatsCard key={i} cat={el} />)}</div>;
};

export default CatsList;
