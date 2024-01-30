import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import FavoritePageCats from './pages/FavoritePageCats';
import HomePageCats from './pages/HomePageCats';
import { useEffect } from 'react';
import { api } from './utils/api';
import { useDispatch } from 'react-redux';
import { fetchGetCats } from './store/slices/catsSlice';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGetCats());
    }, [dispatch]);

    return (
        <div className='App'>
            <Header />
            <main className='main'>
                <div className='container'>
                    <Routes>
                        <Route path='/Kalliacto/frontend-challenge/' element={<HomePageCats />} />
                        <Route path='Kalliacto/frontend-challenge/favorite' element={<FavoritePageCats />} />
                    </Routes>
                </div>
            </main>
        </div>
    );
}

export default App;
