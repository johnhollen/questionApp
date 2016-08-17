const BASE_URL = 'http://192.168.99.100/api';

const BASE_OPTIONS = {
    method: 'GET'
};

export default questionAPI = {
    random: () => fetch(`${BASE_URL}/questions/random`, BASE_OPTIONS)
};
