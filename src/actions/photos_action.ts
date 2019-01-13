import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { apiGetPhotos } from '../utilities/api';

import {
    getPhotosFailed,    
    getPhotosLoaded,
    getPhotosSuccess,
} from './action-types/action-types';

const url = 'https://jsonplaceholder.typicode.com/photos';

export const getPhotos = (onSuccess?: () => void) => {
    return async (dispatch: ThunkDispatch<any, any, Action>) => {
         dispatch(getPhotosLoaded());
        try {
            const res = await apiGetPhotos(url);
             dispatch(getPhotosSuccess(res.data));

            if (onSuccess) {
                onSuccess();
            }
            
        } catch (e) {
            dispatch(getPhotosFailed(e))
        }
    }
}