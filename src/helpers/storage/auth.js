export const setAccessToken = (value) => {
  localStorage.setItem('AUTH_ACCESS_TOKEN', value);
};

export const removeAccessToken = (value) => {
  localStorage.removeItem('AUTH_ACCESS_TOKEN');
};

export const setClient = (value) => {
  localStorage.setItem('AUTH_CLIENT', value);
};

export const removeClient = (value) => {
  localStorage.removeItem('AUTH_CLIENT');
};

export const setUid = (value) => {
  localStorage.setItem('AUTH_UID', value);
};

export const removeUid = (value) => {
  localStorage.removeItem('AUTH_UID');
};
