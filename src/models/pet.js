import { getPets } from '@/services/pet';
export default {
  namespace: 'pet',
  state: {
    pets: [],
  },

  effects: {
    *getPets({ payload }, { call, put }) {
      const response = yield call(getPets, payload);
      console.log('models getPets response: ', response);
      if (response && response.code === 200) {
        yield put({
          type: 'changeState',
          payload: {
            pets: response.data,
          },
        });
      }
    },
  },
  reducers: {
    changeState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
