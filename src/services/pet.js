import request from '@/utils/request';

export async function getPets(params) {
  return request('/api/pet/pets', {
    method: 'GET',
    data: params,
  });
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //       'Access-Control-Allow-Origin': '*',
  //     },
  //     body: queryString.stringify(params),
  //   };
  //   return fetch('https://dev.iecho.cc/api/pet/pets', requestOptions)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       return data;
  //     });
}
export async function queryCurrent() {
  return request('/api/currentUser');
}
export async function queryNotices() {
  return request('/api/notices');
}
