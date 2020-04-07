import { accountRegister } from "../services/register";
import request from "../utils/request";

export default {
  namespace: "register",
  state: {
    submitting: false,
  },

  effects: {
    *accountSubmit({ payload }, { call, put }) {
      // yield put({
      //   type: "changeState",
      //   payload: { submitting: true },
      // });
      //const response = yield call(accountRegister, payload);
      //console.log("payload", payload);
      let formData = new FormData();
      formData.append("firstName", "yiwen");
      formData.append("lastName", "Shang");
      formData.append("password", "123456");
      formData.append("phone", "13600000002");

      formData.forEach((value, key) => {
        console.log("key %s: value %s", key, value);
      });
      // const formData = {
      //   firstName: "yiwen",
      //   lastName: "Shang",
      //   password: "123456",
      //   phone: "13600000002",
      // };

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
        },
        body: formData,
      };
      fetch("http://localhost:9090/api/user/register", requestOptions).then(
        (message) => {
          console.log(message);
        }
      );
    },
  },

  reducers: {
    changeState(state, [payload]) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
