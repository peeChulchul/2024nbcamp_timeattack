import axios from "axios";

export async function createAccount(body: any) {
  const data = await axios.post("/api/account", body);
  return data;
}
