import { fetcher } from './index';
import { convertResponseData } from '../helpers/gateways';

export const getIssues = () => {
  const url = `${process.env.RUKOLOG_API_URL}/issues`
  return fetcher(url, 'GET')
    .then(async response => {
      return await convertResponseData(response);
    })
};

export const getIssue = ({ id }) => {
  const url = `${process.env.RUKOLOG_API_URL}/issues/${id}`
  return fetcher(url, 'GET')
    .then(async response => {
      return await convertResponseData(response);
    })
};