const BASE_URL = 'https://api.github.com/';

export const api = {
  getUser: async (user) => {
    const response = await fetch(`${BASE_URL}users/${user}`);
    if (!response.ok) throw new Error('User not found');
    return await response.json();
  },
  getListRepositories: async (user, page = 1, perPage = 4) => {
    const response = await fetch(`${BASE_URL}users/${user}/repos?page=${page}&per_page=${perPage}`);
    return response.json();
  },
};
