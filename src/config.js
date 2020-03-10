const testApiBaseUrl = 'http://localhost:8080';
const prodApiBaseUrl = 'https://protected-harbor-70609.herokuapp.com';
const baseUrl = process.env.REACT_APP_STAGE === 'test' ? testApiBaseUrl : prodApiBaseUrl;

export default baseUrl;
