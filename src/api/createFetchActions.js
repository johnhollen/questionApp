function generateFetchActions(options) {
    const {
        apiCall, requestKey,
        receiveKey
    } = options;

    const dispatchRequestKey = () => ({type: requestKey});
    const JSONtransform = response => response.json();

    return params => {
        return dispatch => {
            dispatchRequestKey();
            return 
        };
    };
}