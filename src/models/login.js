import { stringify } from 'querystring';
import { history } from 'umi';
import { Login } from '@/services/login';
import { setAuthority } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';

const Model = {
  namespace: 'login',
  state: {
    status: undefined,
  },
  effects: {
    *login({ payload }, { call, put }) {
      console.log('login models payload: ', payload);
      const res = yield call(Login, payload);
      console.log('Login response: ', res);
      let response = JSON.parse(res);

      if (response.code === 200) {
        response.status = 'ok';
      } else {
        response.status = 'error';
      }
      yield put({
        type: 'changeLoginStatus',
        payload: response,
      }); // Login successfully
      console.log('Login response JSON: ', response);
      if (response.code === 200) {
        const urlParams = new URL(window.location.href);
        const params = getPageQuery();
        console.log('urlParams: ', urlParams);
        console.log('getPageQuery(): ', params);
        let { redirect } = params;

        if (redirect) {
          const redirectUrlParams = new URL(redirect);

          if (redirectUrlParams.origin === urlParams.origin) {
            redirect = redirect.substr(urlParams.origin.length);

            if (redirect.match(/^\/.*#/)) {
              redirect = redirect.substr(redirect.indexOf('#') + 1);
            }
          } else {
            window.location.href = '/';
            return;
          }
        }

        history.replace(redirect || '/');
      }
    },

    logout() {
      const { redirect } = getPageQuery(); // Note: There may be security issues, please note

      if (window.location.pathname !== '/user/login' && !redirect) {
        history.replace({
          pathname: '/user/login',
          search: stringify({
            redirect: window.location.href,
          }),
        });
      }
    },
  },
  reducers: {
    changeLoginStatus(state, { payload }) {
      setAuthority(payload.currentAuthority);
      return { ...state, status: payload.status, type: payload.type };
    },
  },
};
export default Model;
