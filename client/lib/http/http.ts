type Headers = { [key: string]: string } | null;
type Method = 'GET' | 'POST' | 'DELETE';
type FetchParams = {
  method: Method;
  headers?: Todo;
  data?: Todo;
};
type ErrorResponse = Todo;
type Todo = any;

const apiDomain: string = 'http://localhost:4000';

const createHeader = (headers: Headers) => {
  const requestHeaders = new Headers();
  for (const key in headers) {
    requestHeaders.set(key, headers[key]);
  }
  return requestHeaders;
};

type callFetchParams<R = undefined> = {
  method: Method;
  url: string;
  data?: R;
  headers?: Headers;
};

const callFetch = <T, R = undefined>({
  method,
  url,
  data,
  headers,
}: callFetchParams<R>): Promise<T | ErrorResponse> => {
  const requestURL = apiDomain + url;

  const params: FetchParams = {
    method,
  };

  if (headers) {
    const requestHeaders = createHeader(headers);
    params.headers = requestHeaders;
  }
  if (data) {
    const requestBody = JSON.stringify(data);
    params.data = requestBody;
  }

  return fetch(requestURL, params);
};

export const apiGet = <T>(url: string, headers: Headers = null) => {
  return callFetch<T>({
    method: 'GET',
    url,
    headers,
  });
};
