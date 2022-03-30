import Axios from "axios";

export const api = "http://localhost:5000/";

export const fetchData = Axios.get("/api/datas");
