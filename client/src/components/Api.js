import Axios from "axios";

export const url = "http://localhost:5000";

// export const fetchData = Axios.get(`${api + "/api/datas"}`);
// const config = { headers: { "Content-Type": "multipart/form-data" } };
export const postData = (formData) => {
  return Axios.post(url + "/api/postClient", formData);
};

export const fetchData = (sd) => {
  return Axios.get(url + "/api/datas")
    .then((res) => {
      sd(res.data);
    })
    .catch((err) => console.log(err));
};

export const fetchSingleClient = (id) => {
  return Axios.get(url + `/api/single?${id}`);
};

export const deleteUser = (id) => {
  return (
    Axios.delete(`/api/delete/${id}`)
      // return Axios.delete(`/api/delete/`, { data: { id } })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err))
  );
};
