import { API } from './../../backend';

export const getProducts = () => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    return fetch(`${API}/product`, requestOptions)
        .then((response) => {
            return response.json();
        })
        .catch(error => console.log('error', error));
}