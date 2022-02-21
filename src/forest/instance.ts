import { CachiosInstance } from "cachios";

import { ServiceConfig } from "../types/forest";

import { ForestService } from "./service";

export class ForestInstance {
  constructor(readonly cachiosInstance: CachiosInstance) {}

  public createService = <Response, Payload = Response, IdType = string>(
    prefix: string,
    config?: ServiceConfig
  ) => new ForestService<Response, Payload, IdType>(prefix, this, config);
}

export default ForestInstance;