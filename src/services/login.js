import request from '@/utils/request';

export async function Login(params) {
  // return request('/api/login/account', {
  //   method: 'POST',
  //   data: params,
  // });
  console.log('Login service params: ', params);
  var myHeaders = new Headers();
  myHeaders.append('Cookie', 'PHPSESSID=1cpcc9tneku95ibp6nebn8l5vp');

  var formdata = new FormData();
  formdata.append('password', params.password);
  formdata.append('phone', params.phone);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow',
  };

  return fetch('https://dev.iecho.cc/api/user/login', requestOptions)
    .then((response) => response.text())
    .then((result) => {
      return result;
    })
    .catch((error) => console.log('error', error));
  // const requestOptions = {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //     'Access-Control-Allow-Origin': '*',
  //   },
  //   body: queryString.stringify(params),
  // };
  // return fetch('https://dev.iecho.cc/api/user/login', requestOptions)
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     return data;
  //   });
}
export async function getFakeCaptcha(mobile) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
