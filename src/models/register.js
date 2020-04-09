import { Register } from '@/services/register';
import queryString from 'query-string';

const Model = {
  namespace: 'userAndregister',
  state: {
    status: undefined,
  },
  effects: {
    *submit({ payload }, { call, put }) {
      let formData = new FormData();
      formData.append('firstName', 'yiwen');
      formData.append('lastName', 'Shang');
      formData.append('password', '123456');
      formData.append('phone', '13600000002');

      // const formData = {
      //   firstName: 'yiwen',
      //   lastName: 'Shang',
      //   password: '123456',
      //   phone: '13600000002',
      // };

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Origin': '*',
        },
        body: queryString.stringify(payload),
      };
      fetch('https://dev.iecho.cc/api/user/register', requestOptions).then((message) => {
        console.log(message);
      });

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
