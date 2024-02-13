import React, { useEffect } from 'react';
import CatsList from '../components/CatsList/CatsList';
import { useDispatch, useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { fetchGetCats } from '../store/slices/catsSlice';

const HomePageCats = (props) => {
    const { catsList, isLoading } = useSelector((s) => s.cats);
    const dispatch = useDispatch();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView && catsList.length) {
            dispatch(fetchGetCats());
        }
    }, [dispatch, inView]);

    return (
        <div>
            <CatsList cats={catsList} />
            <div ref={ref} style={{ marginTop: '40px', textAlign: 'center', color: '#2196f3' }}>
                {isLoading ? 'Подождите, котики в пути...' : ''}
            </div>
        </div>
    );
};

export default HomePageCats;
