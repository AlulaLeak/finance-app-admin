export const userAccessToken = () => {
  const accessToken =
    localStorage.getItem("accessToken") !== undefined
      ? localStorage.getItem("accessToken")
      : localStorage.clear();

  return accessToken;
};
