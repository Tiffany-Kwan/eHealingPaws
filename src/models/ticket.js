import { newTicket } from '@/services/ticket';
export default {
  //const Model = {
    namespace: 'ticket',
    state: {
      // userId: undefined,
      // petId: undefined,
      // apptType: undefined,
      // status: undefined,
      // startTime: undefined,
      // finishTime: undefined,
      // priority: undefined,
      ticketInfo:[]
    },

    effects: {
      *newTicket({ payload }, { call, put }) {
        debugger;
        console.log('ticket models payload: ', payload);
        const res = yield call(newTicket, payload);

        yield put({
          type: 'changeState',
          //payload: payload,
          payload: {
            ticketInfo: res.data,
          },
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
