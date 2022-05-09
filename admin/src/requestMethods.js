import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWRiOTI4MTM4M2NhYjc2YzhlOTFkNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzA1NDIzMiwiZXhwIjoxNjQzMzEzNDMyfQ.49SMCFZvPNK8HbE40MUiM1_1VCR4G7rb_35NidQxY4I';
console.log('token' , TOKEN);
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
