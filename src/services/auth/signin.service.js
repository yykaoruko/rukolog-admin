import { signin } from '~/src/gateways';
import { setAccessToken, setClient, setUid } from '~/src/helpers/storage'
import { convertResponseSuccess, convertResponseFailure } from '~/src/helpers/service'

export const signinService = async (params) => {
  const response = await signin({ params });
  const data = await response.json();

  const accessToken = response.headers.get('access-token');
  const client = response.headers.get('client');
  const uid = response.headers.get('uid');
  setAccessToken(accessToken);
  setClient(client);
  setUid(uid);

  if (response.ok) {
    return convertResponseSuccess(data);
  } else {
    return convertResponseFailure(response.status, data.errors);
  }
};