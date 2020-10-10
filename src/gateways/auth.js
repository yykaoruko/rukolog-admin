import { fetcher } from './index';

export const signin = ({ params }) => {
  const query = new URLSearchParams(params);
  const url = `${process.env.RUKOLOG_API_URL}/auth/sign_in?${query}`
  return fetcher(url, 'POST');
};

export const signOut = () => {
  const url = `${process.env.RUKOLOG_API_URL}/auth/sign_out`
  return fetcher(url, 'DELETE');
};

export const signUp = ({ email, password }) => {
  const url = `${process.env.RUKOLOG_API_URL}/auth`
  return fetcher(url, 'POST');
};