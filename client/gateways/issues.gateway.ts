import { apiGet } from '~/lib/http';

type GetIssuesResponse = any;

export const getIssues = () => {
  return apiGet<GetIssuesResponse>('/domain');
};
