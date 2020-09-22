export const convertResponseData = async (response) => {
  const data = await response.json();
  if (response.ok) {
    return {
      ok: true,
      data: data,
    }
  } else {
    return {
      ok: false,
      status: response.status,
      message: response.error,
    }
  }
};