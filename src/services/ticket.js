//import request from 'umi-request';
//import queryString from 'query-string';
import request from '@/utils/request';

export async function newTicket(params) {

  return request('/api/ticket/tickets',{
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
  //   return fetch('https://dev.iecho.cc/api/user/register', requestOptions)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       return data;
  //     });
}
