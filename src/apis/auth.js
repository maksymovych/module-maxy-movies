import axios from "axios";

export const API = "https://api.themoviedb.org/3/";
export const API_IMAGES = "https://image.tmdb.org/t/p/original/";

export const baseAxios = axios.create({
  baseURL: API,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
  },
});

export const getMovie = async (id) => {
  const { data } = await baseAxios.get(`movie/${id}`);
  return data;
};

export const generateToken = async () => {
  const { data } = await baseAxios.get("authentication/token/new");
  localStorage.setItem("request_token", data.request_token);
  return data.request_token;
};

export const generateSeccionAndUser = async () => {
  const request_token = localStorage.getItem("request_token");
  const {
    data: { session_id },
  } = await baseAxios.post("authentication/session/new", {
    request_token,
  });
  const { data } = await baseAxios.get(`account?session_id=${session_id}`);
  localStorage.setItem("session_id", session_id);
  localStorage.setItem("user", JSON.stringify(data));
  return session_id;
};

export const getUserData = async (sessionId) => {
  const { data } = await baseAxios.get(`account?session_id=${sessionId}`);
  return data;
};
