const BASE_URL = 'https://api.github.com/';

export const api = {
  getProfile: (user) => {
    return fetch(`${BASE_URL}users/${user}`);
  },
  getRepositories: (user, page = 1, perPage = 4) => {
    return fetch(`${BASE_URL}users/${user}/repos?page=${page}&per_page=${perPage}`);
  },
};
