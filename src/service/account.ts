export async function createAccount(body: any) {
  const data = await fetch("/api/account", { method: "POST", body, headers: { "Content-Type": "application/json" } });
  console.log(data);
  return data;
}
