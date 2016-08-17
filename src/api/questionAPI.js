const BASE_URL = 'http://192.168.99.100/api';

export default questionAPI = {
    random: fetch(`${BASE_URL}/questions/random`)
};