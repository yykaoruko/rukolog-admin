export const convertResponseData = async (response) => {
  if (response.ok) {
    const data = await response.json();
    return {
      ok: true,
      data,
    }
  } else {
    return {
      ok: false,
      status: response.status,
      message: response.error || null,
    }
  }
};