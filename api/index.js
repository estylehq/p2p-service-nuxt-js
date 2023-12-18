import axios from 'axios';

export const METHOD_GET = 'GET';
export const METHOD_POST = 'POST';

export function request(config, ssn) {
  return axios({
    ...config,
    headers: {
      ...config.headers,
      ssn: ssn === null || ssn === undefined ? '' : ssn,
    },
  }).then(response => response.data);
}

axios.defaults.baseURL = 'http://localhost:3000/api/v1';

export default axios;
