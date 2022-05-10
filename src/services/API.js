import axios from 'axios';

export const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = async () => {
  return axios.get(`${BASE_URL}/users/`);
};
export const fetchUser = async (id) => {
  return axios.get(`${BASE_URL}/users/${id}`);
};

export const fetchPosts = async () => {
  return axios.get(`${BASE_URL}/posts/`);
};
export const fetchPost = async (id) => {
  return axios.get(`${BASE_URL}/posts/${id}`);
};
export const login = async (email) => {
  return axios.get(`${BASE_URL}/users?email=${email}`);
};
export const createUser = async (body) => {
  return axios.post(`${BASE_URL}/users/`, body, {
    headers: {
      auth: 'Bearer adsafdasnfjnasjfnkjasnfkjansjkfnjasnfkjasnkfjnsajnfkjasnfkjnasjfnkjasnfkjnasfkjnasjfn',
    },
  });
};
