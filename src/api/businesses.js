import axios from "axios";

export default axios.create({
  baseURL: "https://biz-reg.herokuapp.com/api",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
