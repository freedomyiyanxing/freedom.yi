import axios, {
  AxiosPromise, AxiosResponse, AxiosRequestConfig,
} from 'axios';

const instance = axios.create();

// 请求前拦截
instance.interceptors.request.use(
  (request: AxiosRequestConfig): AxiosRequestConfig => {
    request.headers = {
      ...request.headers,
      'Content-Type': 'application/json',
      charset: 'utf-8',
      channelId: 2,
      appVersion: 'v1.1.0',
      termTyp: 'web',
    };

    return request;
  },
  (err) => Promise.reject(err),
);

// 响应前拦截
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    const { headers, data: { code, msg } } = response;

    return response.data;
  },
  (err) => {
    const { response } = err;
    const { status, statusText } = response;
    return Promise.reject(err);
  },
);


const post = <T>(url: string, data: object): AxiosPromise => instance({
  method: 'post',
  url: `/api${url}`,
  data,
});

// eslint-disable-next-line max-len
const get = <T>(url: string, params?: object): AxiosPromise<T> => instance({
  method: 'get',
  url: `/api${url}`,
});

const SUCCESS = 'OK';

export {
  post,
  get,
  SUCCESS,
};
