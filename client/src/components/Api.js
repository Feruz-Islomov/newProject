import Axios from "axios";

export const api = "http://localhost:5000";

// export const fetchData = Axios.get(`${api + "/api/datas"}`);
// const config = { headers: { "Content-Type": "multipart/form-data" } };
export const postData = (formData) => {
  return Axios.post(api + "/api/post", formData);
};
