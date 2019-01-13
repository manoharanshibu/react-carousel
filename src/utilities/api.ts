import axios from 'axios';

export const apiGetPhotos = (url: string) => {
    return axios.get(url)
}

export const apiPostPhotos = (url: string, body: any) => {
    return axios.post(url, body)
}