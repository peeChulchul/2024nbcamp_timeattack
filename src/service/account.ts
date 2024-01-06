import axios from "axios";

export async function createAccount(body: any) {
  const { data } = await axios.post("/api/account/signup", body);
  return data;
}

export async function loginAccount(body: any) {
  const { data } = await axios.post("/api/account/login", body);
  return data;
}
