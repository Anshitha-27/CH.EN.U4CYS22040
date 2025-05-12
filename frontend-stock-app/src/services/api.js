import axios from "axios";

const BASE_URL = "http://20.244.56.144/evaluation-service";

let token = null;

export const authenticate = async () => {
  const res = await axios.post(`${BASE_URL}/auth`, {
    email: "you@college.edu",
    name: "Your Name",
    rollNo: "yourRollNo",
    accessCode: "yourAccessCode",
    clientID: "yourClientID",
    clientSecret: "yourClientSecret"
  });
  token = res.data.access_token;
};

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`
  }
});
