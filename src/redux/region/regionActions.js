export const actionNames = {
    REGION_ADD: 'REGION_ADD',
    REGION_EDIT: 'REGION_EDIT',
    REGION_REMOVE: 'REGION_REMOVE',

    REGION_DATA_REQUEST: 'REGION_DATA_REQUEST',
    REGION_DATA_REQUEST_FAILED: 'REGION_DATA_REQUEST_FAILED',
    REGION_DATA_REQUEST_SUCCESS: 'REGION_DATA_REQUEST_SUCCESS'
};

const actions = {
    addRegion(data) {
        return {
            type: actionNames.REGION_ADD,
            payload: data
        };
    },
    editRegion(data){
        return {
            type: actionNames.REGION_EDIT,
            payload: data
        };
    },
    removeRegion(region){
        return {
            type: actionNames.REGION_REMOVE,
            payload: region
        }
    },
    requestData(){
        return {
            type: actionNames.REGION_DATA_REQUEST
        };
    },
    requestDataFailed(error){
        return {
            type: actionNames.REGION_DATA_REQUEST_FAILED,
            payload: error
        };
    },
    requestDataSuccess(data){
        return {
            type: actionNames.REGION_DATA_REQUEST_SUCCESS,
            payload: data
        };
    }
};

export default actions;