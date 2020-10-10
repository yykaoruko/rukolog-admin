export const convertResponseSuccess = (data) => {
  return {
    ok: true,
    data,
  }
};

export const convertResponseFailure = (status, errors) => {
  return {
    ok: false,
    status: status,
    errors: errors,
  }
}