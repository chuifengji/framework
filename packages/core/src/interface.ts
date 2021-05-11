export interface IPlugin {
  initializer?: Function;
  // (IFcContext) => {};
  beforePrefetch?: Function;
  requestStart?: Function;
}

export interface IStringMap {
  [key: string]: string;
}

export interface IMap {
  [key: string]: any;
}

export enum FcMethod {
  HEAD = 'HEAD',
  POST = 'POST',
  PUT = 'PUT',
  GET = 'GET',
  DELETE = 'DELETE',
}

export interface IFcRequest {
  headers?: IStringMap;
  path?: string;
  queries?: { [key: string]: any };
  method: FcMethod;
  clientIP: string;
  url: string;
}

export interface IFcContext {
  requestId?: string;
  credentials?: {
    accessKeyId: string;
    accessKeySecret: string;
    securityToken: string;
  };
  function?: {
    name: string;
    handler: string;
    memory: number;
    timeout: number;
    initializer: string;
    initializationTimeout: number;
  };
  service?: {
    name: string;
    logProject: string;
    logStore: string;
    qualifier: string;
    versionId: string;
  };
  region?: string;
  accountId?: string;
}

export interface IFcHttpRes {
  // 基础返回值
  statusCode?: number;
  headers?: IStringMap;
  deleteHeaders?: string[];
  body?: string;
}

export interface IMidRequest {
  req?: IFcRequest;
  res?: { [key: string]: string };
  event?: string | Buffer;
  context: IFcContext;
  callback?: Function;
  type: string;
  result: any;
  error: Error;
}

//
// interface IBaseEventParams {
//   type: string;
//   result: undefined;
//   error: undefined;
// }
//
// export interface IHttpParams extends IBaseEventParams {
//   req?: any;
//   res?: any;
//   context: any;
// }
//
// export interface IEventParams extends IBaseEventParams {
//   event?: any;
//   context: any;
//   callback?: Function;
// }
//
// export interface IInitializerParams extends IBaseEventParams {
//   event?: any;
//   context: any;
//   callback?: Function;
// }
