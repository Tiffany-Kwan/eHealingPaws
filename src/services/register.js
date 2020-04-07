import request from "../utils/request";

export async function accountRegister(value) {
  console.log("register service: ", value);
  return request("/user/register", {
    method: "POST",
    body: value,
  });
}
