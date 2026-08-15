const API_URL = import.meta.env.VITE_API_URL || 'https://mettalent-g129.vercel.app/api';

async function fetchApi(endpoint, options = {}) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Request failed');
  }

  return response.json();
}

export const api = {
  getTalent: (id) => fetchApi(`/talents/${id}`),
  getRoles: () => fetchApi('/roles'),
  getJobs: (location) => fetchApi(`/jobs${location ? `?location=${location}` : ''}`),
  getCourses: (skillId) => fetchApi(`/courses${skillId ? `?skillId=${skillId}` : ''}`),
  computeGap: (talentId, roleId) =>
    fetchApi('/gap', {
      method: 'POST',
      body: JSON.stringify({ talentId, roleId }),
    }),
  computeMatch: (roleId, location) =>
    fetchApi('/match', {
      method: 'POST',
      body: JSON.stringify({ roleId, location }),
    }),
};
