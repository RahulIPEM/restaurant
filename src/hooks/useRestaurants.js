import { useState, useEffect } from "react";
import zomato from '../api/zomato';

export default () => {
    const [restaurants, setRestaurants] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    async function onSearchSubmit(term) {
        try {
            const { data } = await zomato.get('/search', {
                params: {
                    q: term,
                    count: 20
                }
            });
            setRestaurants(data.restaurants);
        } catch (error) {
            setErrorMessage('Something went wrong.');
        }
    }

    useEffect(() => {
        onSearchSubmit('italian');
    }, [])

    return [restaurants, errorMessage, onSearchSubmit];
}