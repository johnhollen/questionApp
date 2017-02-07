const BASE_OPTIONS = {
    method: 'GET'
};

const checkErrorBoundaries = (response) => {
    if (response.status < 200 || response.status >= 400) {
        throw new Error(response.statusText);
    }
    return response;
};

const JSONtransform = (response) => response.json();

export default function request(url, options = BASE_OPTIONS) {
    return fetch(url, options)
        .then(checkErrorBoundaries)
        .then(JSONtransform);
}
