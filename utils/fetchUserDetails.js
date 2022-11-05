export const userAccessToken = () => {
  const accessToken =
    localStorage.getItem("accessToken") !== undefined
      ? localStorage.getItem("accessToken")
      : localStorage.clear();

  return accessToken;
};

export const localUser = () => {
  const user =
    localStorage.getItem("user") !== undefined
      ? JSON.parse(
          localStorage.getItem("user") ? localStorage.getItem("user") : null
        )
      : localStorage.clear();
  if (user) return user[0];
  else return null;
};
