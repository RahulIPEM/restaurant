import axios from 'axios';

export default axios.create({
    baseURL: 'https://developers.zomato.com/api/v2.1',
    headers: {
        'user-key': 'c97c5bad0dd525822d3ae5bddd0db8ae'
    }
})