export const TYPES = {
    FAILED: "LOAD_FAILED",    
    PENDING: "LOAD_PENDING",
    SUCCESS: "LOAD_SUCCESS",
}

export const getPhotosFailed = (error: any) => ({
    type: TYPES.FAILED,
    isLoading: false,
    isError: true,
    error
});

export const getPhotosLoaded = () => ({
    type: TYPES.PENDING,
    isLoading: true,
    isError: false
});

export const getPhotosSuccess = (data: any) => ({
    type: TYPES.SUCCESS,
    isLoading: false,
    isError: false,
    data
});