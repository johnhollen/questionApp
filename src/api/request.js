const checkErrorBoundaries = (response) => {
    if (response.status < 200 || response.status >= 400) {
        throw new Error(response.statusText);
    };
    return response;
};

const JSONtransform = (response) => response.json();

export default function request(url) {
    return fetch(url)
        .then(checkErrorBoundaries)
        .then(JSONtransform)
}