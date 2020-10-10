import { fetcher } from './index';

export const getIssues = () => {
  const url = `${process.env.RUKOLOG_API_URL}/issues`
  return fetcher(url, 'GET');
};

export const getIssue = ({ id }) => {
  const url = `${process.env.RUKOLOG_API_URL}/issues/${id}`
  return fetcher(url, 'GET');
};