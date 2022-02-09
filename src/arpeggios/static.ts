import { Prefix } from "types/route";
import cachiosLib, { CachiosInstance, CachiosRequestConfig } from "cachios";
import axiosLib, { AxiosInstance, AxiosRequestConfig } from "axios";
import { ArpeggiosInstance } from "./instance";

export interface ArpeggiosCreateProps {
  axios?: AxiosInstance;
  cachios?: CachiosInstance;
  axiosRequestConfig?: AxiosRequestConfig;
}

export class ArpeggiosStatic {
  create({
    axios,
    axiosRequestConfig,
    cachios,
  }: ArpeggiosCreateProps = {}): ArpeggiosInstance {
    let axiosInstance;
    if (axios) {
      console.log("axios");

      axiosInstance = axios;
    } else {
      console.log("axios Instance");
      axiosInstance = axiosLib.create(axiosRequestConfig);
    }
    const cachiosInstance = cachios
      ? cachios
      : cachiosLib.create(axiosInstance);

    const arpeggiosInstance = new ArpeggiosInstance(cachiosInstance);

    return arpeggiosInstance;
  }
}
