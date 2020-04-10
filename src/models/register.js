import { Register } from '@/services/register';

const Model = {
  namespace: 'userAndregister',
  state: {
    status: undefined,
  },
  effects: {
    *submit({ payload }, { call, put }) {
      const response = yield call(Register, payload);

      console.log('model response: ', response);

      // const requestOptions = {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded',
      //     'Access-Control-Allow-Origin': '*',
      //   },
      //   body: queryString.stringify(payload),
      // };
      // fetch('https://dev.iecho.cc/api/user/register', requestOptions)
      //   .then((response) => {
      //     return response.json();
      //   })
      //   .then((data) => {
      //     console.log(data);
      //   });

      // const response = yield call(Register, payload);
      // console.log('models, response: ', response);
      // yield put({
      //   type: 'registerHandle',
      //   payload: response,
      // });
    },
  },
  reducers: {
    registerHandle(state, { payload }) {
      return { ...state, status: payload.status };
    },
  },
};
export default Model;
