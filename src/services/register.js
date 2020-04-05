import request from "../utils/request";

export async function accountRegister(value) {
  return request("/user/register/", {
    method: "POST",
    data: value,
  });
}
