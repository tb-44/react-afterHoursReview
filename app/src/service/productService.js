import axios from 'axios';

export function getProducts() {
    return axios.get('https://practiceapi.devmountain.com/products').then(res => res.data)
}

