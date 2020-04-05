import { accountRegister } from "../services/register";

export default {
  namespace: "register",
  state: {
    submitting: false,
  },

  effects: {
    *accountSubmit({ payload }, { call, put }) {
      yield put({
        type: "changeState",
        payload: { submitting: true },
      });
      const response = yield call(accountRegister, payload);
      console.log("register. response: ", response);
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
