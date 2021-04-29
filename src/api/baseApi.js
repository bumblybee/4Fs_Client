import axios from "axios";

const baseURL = "http://localhost:9000";

const instance = axios.create({
  baseURL,
  withCredentials: true,
  crossDomain: true,
});

export const get = async (url) => {
  return await instance.get(url).catch((e) => {
    if (e.response) {
      console.log(e.response.data.error);
    }
  });
};

export const post = async (url, data) => {
  return await instance.post(url, data).catch((e) => {
    if (e.response) {
      console.log(e.response.data.error);
    }
  });
};

export const put = async (url, data) => {
  return await instance.put(url, data).catch((e) => {
    if (e.response) {
      console.log(e.response.data.error);
    }
  });
};

export const destroy = async (url, data) => {
  return await instance.delete(url, data).catch((e) => {
    if (e.response) {
      console.log(e.response.data.error);
    }
  });
};
