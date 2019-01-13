import { IPhoto } from './models';
import { TYPES } from '../../actions/action-types/action-types';
import { IAction } from '../../reducers/photos/models';
 
export interface IPhotosStoreState {
    photo: IPhoto[],
    isLoading: boolean;
    isError: boolean;
    error: any;
}

const defaultState: IPhotosStoreState = {
    photo: [
        {
            id: 0,
            title: '',
            url: '',
            thumbnailUrl: ''
        }
    ],
    isLoading: false,
    isError: false,
    error: null,
};

export const reducer = (state: IPhotosStoreState = defaultState, action: IAction): IPhotosStoreState => {
    switch (action.type) {
        case TYPES.PENDING:
            return {
                ...state,
                isLoading: action.isLoading,
                isError: action.isError
            };
        case TYPES.SUCCESS:
            return {
                ...state,
                ...action.data,
                isLoading: action.isLoading,
                isError: action.isError
            };
        case TYPES.FAILED:
            return {
                ...state,
                isError: action.isError,
                error: action.error
            };
        default:
            return state;
    }
};
