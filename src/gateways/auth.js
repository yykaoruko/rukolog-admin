import { fetcher } from './index';
import { convertResponseData } from '../helpers/gateways';

export const signIn = ({ params }) => {
  const query = new URLSearchParams(params);
  const url = `${process.env.RUKOLOG_API_URL}/auth/sign_in?${query}`
  return fetcher(url, 'POST')
    .then(async response => {
      return await convertResponseData(response);
    })
};

export const signOut = () => {
  const url = `${process.env.RUKOLOG_API_URL}/auth/sign_out`
  return fetcher(url, 'DELETE')
    .then(async response => {
      return await convertResponseData(response);
    })
};

export const signUp = ({ email, password }) => {
  const url = `${process.env.RUKOLOG_API_URL}/auth`
  return fetcher(url, 'POST')
    .then(async response => {
      return await convertResponseData(response);
    })
};