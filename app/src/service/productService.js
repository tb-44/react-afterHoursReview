import axios from 'axios';

export function getProducts() {
    return axios.get('https://practiceapi.devmountain.com/products').then(res => res.data)
}

export function getProduct(id) {
   return axios.get('https://practiceapi.devmountain.com/products/' + id).then(res => res.data)
}