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
      if (response.code === '200') {
        response.status = 'ok';
      } else {
        response.status = 'error';
      }

      yield put({
        type: 'registerHandle',
        payload: response,
      });
    },
  },
  reducers: {
    registerHandle(state, { payload }) {
      return { ...state, status: payload.status };
    },
  },
};
export default Model;
