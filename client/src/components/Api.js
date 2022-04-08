import Axios from "axios";

export const api = "http://localhost:5000";

// export const fetchData = Axios.get(`${api + "/api/datas"}`);
// const config = { headers: { "Content-Type": "multipart/form-data" } };
export const postData = (formData) => {
  return Axios.post(api + "/api/postClient", formData);
};

export const fetchData = (sd) => {
  return Axios.get(api + "/api/datas")
    .then((res) => {
      sd(res.data);
    })
    .catch((err) => console.log(err));
};

export const deleteUser = (id) => {
  console.log(id);
  return Axios.delete("/api/delete", { id })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};
