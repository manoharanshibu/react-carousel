import { combineReducers } from 'redux';
import { reducer as photos, IPhotosStoreState } from '../reducers/photos';

export interface IStore {
    readonly photos: IPhotosStoreState;
    isVisible: boolean;
}

export default combineReducers({
    photos
});