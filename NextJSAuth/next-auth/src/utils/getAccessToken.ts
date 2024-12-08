import axios from "axios";

const getAccessToken = async () => {
  const accessTokenCookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("accessToken="));
  const accessToken = accessTokenCookie?.split("=")[1];

  if (!accessToken) return await refreshToken();

  const payload = JSON.parse(atob(accessToken.split(".")[1]));
  if (payload.exp * 1000 < Date.now()) return await refreshToken();

  return accessToken;
};

const refreshToken = async () => {
  try {
    const response = await axios.post(
      "/api/user/refresh",
      {},
      { withCredentials: true }
    );
    return response.data.accessToken;
  } catch (error) {
    window.location.href = "/login";
    return null;
  }
};

export default getAccessToken;
