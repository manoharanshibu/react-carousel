export interface IAction {
    readonly type: string;
    readonly data?: any;
    readonly error?: any;
    readonly isLoading: boolean;
    readonly isError: boolean;
}

export interface IPhoto {
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export interface IPhotos {
    photo: IPhoto[],
    isLoading: boolean;
    isError: boolean;
    error: any;
};

export interface IData {
    photos: IPhotos;
    stat: string;
}