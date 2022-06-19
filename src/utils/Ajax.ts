type RequestType = 'get' | 'post';
type ResType<T> = {
  code: number;
  msg: string | null;
  result: T;
};
type PlainObj = Record<string, any>;
type Request = {
  [key in RequestType]: (url: string, params: PlainObj, config?: any) => Promise<any>;
} & { [key: string]: Function };
const formateUrl = (url, params) => {
  const { limit } = params;
  if (Reflect.has(params, 'limit') && limit) {
    return `${url}/limit=${limit}/json`;
  }
  return url;
};
export const Ajax: Partial<Request> = {
  get<T>(url: string, params: PlainObj, config: any = {}): any {
    const formateURL = formateUrl(url, params);
    return fetch(formateURL, {
      method: 'GET',
      ...config,
    });
  },
  post<T>(url: string, params: PlainObj, config: any = {}): any {
    const formateURL = formateUrl(url, params);
    return fetch(formateURL, {
      method: 'POST',
      body: JSON.stringify(params),
      ...config,
    });
  },
  abort(url) {
    const controller = new AbortController();
    const { signal } = controller;
    fetch(url, {
      signal: controller.signal,
    });
    signal.addEventListener('abort', () => console.log('abort!'));
    controller.abort(); // 取消
  },
};
