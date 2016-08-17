function generateFetchActions(options) {
    const {
        apiCall, requestKey,
        receiveKey
    } = options;

    const dispatchRequestKey = () => ({type: requestKey});
    const dispatchReceiveKey = data => ({
        type: receiveKey,
        payload: data
    });
    
    const JSONtransform = response => {
        return response.json();
    }

    return params => {
        return dispatch => {
            dispatch(dispatchRequestKey());
            return apiCall().then(JSONtransform)
                    .then(data => dispatch(dispatchReceiveKey(data)))
                    .catch(err => {
                        console.log(err);
                    });
        };
    };
}

export default generateFetchActions;
