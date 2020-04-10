import request from 'umi-request';
import queryString from 'query-string';

export async function Register(params) {
  // return request('/user/register', {
  //   method: 'POST',
  //   data: params,
  // });
  let response_data = null;
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
    },
    body: queryString.stringify(params),
  };
  return fetch('https://dev.iecho.cc/api/user/register', requestOptions)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
      //console.log('service response_data1:', response_data);
      //console.log('service data:', data);
    });
  // console.log('service response_data2:', response_data);
  // return response_data;
  // .then(function(response){
  //   return response.clone().json().catch(function(){
  //     return response.
  //   }
  // })
}
