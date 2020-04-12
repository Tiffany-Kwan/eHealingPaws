import { newTicket } from '@/services/ticket';

const Model = {
  namespace: 'ticket',
  state: {
    userId: undefined,
    petId: undefined,
    apptType: undefined,
    status: undefined,
    startTime: undefined,
    finishTime: undefined,
    priority: undefined,
  },
  effects: {
    *newTicket({ payload }, { call, put }) {
      console.log('ticket models payload: ', payload);
      const res = yield call(newTicket, payload);

      yield put({
        type: 'changeState',
        payload: payload,
      });
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
