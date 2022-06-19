export type RequestType = 'get' | 'post' | 'put' | 'delete';
export type ResType<T> = {
  json();
};
type Request = {
  [key in RequestType]: <T>(
    url: string,
    params: Record<string, any>,
    config?: Record<string, any>,
    isProgress?: boolean
  ) => Promise<ResType<T>>;
} & { [key: string]: Function };
type RecordObj = Record<string, any>;
type ReqPathWrapper = {
  [key in RequestType]: string[];
} & { [key: string]: RecordObj };
type ApiPathWrapper = {
  [key in RequestType]: RecordObj;
} & { [key: string]: RecordObj };

type ReqPathWrapperString<T> = {
  [key in keyof T]: keyof T[key];
};
type ReqPaths<K> = ReqPathWrapperString<K>[keyof ReqPathWrapperString<K>];
type FetchFn<K> = Record<
  ReqPaths<K>,
  <T>(params: RecordObj, config?: RecordObj, isProgress?: boolean) => Promise<ResType<T>>
>;
type RightApiPath<T> = keyof T extends RequestType ? T : ApiPathWrapper;

export class GenerateFetch<K> {
  private reqPath: Partial<ApiPathWrapper> = null;

  private ajax: Partial<Request> = null;

  private apiMap: RightApiPath<K>;

  constructor(apiMap: RightApiPath<K>, ajax: Partial<Request>) {
    this.reqPath = this.getReqPath(apiMap);
    this.apiMap = apiMap;
    this.ajax = ajax;
    this.fetchData = this.fetchData.bind(this);
  }

  private getReqPath(apiMap: Partial<ApiPathWrapper>) {
    const reqPath: Partial<ReqPathWrapper> = {};
    const reqType = Object.keys(apiMap);
    reqType.forEach((type) => {
      reqPath[type] = Object.values(apiMap[type]);
    });
    return reqPath;
  }

  public fetchData<T>(
    reqURL: string,
    params: RecordObj,
    config = {},
    isProgress = false
  ): Promise<ResType<T>> {
    for (const [reqMethod, reqURLList] of Object.entries(this.reqPath)) {
      if (reqURLList.includes(reqURL)) {
        return this.ajax[reqMethod](reqURL, params, config, isProgress);
      }
    }
    return null;
  }

  public fetchApi() {
    const api: { [index: string]: unknown } = {};
    for (const [reqMethod, reqURLList] of Object.entries(this.apiMap)) {
      Object.keys(reqURLList).forEach((url) => {
        api[url] = <T>(params: RecordObj, config = {}, isProgress = false): Promise<ResType<T>> =>
          this.ajax[reqMethod](reqURLList[url], params, config, isProgress);
      });
    }
    return api as FetchFn<K>;
  }
}
