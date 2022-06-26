import axios from "axios";
import { Url } from "./constanst";

export interface IProductParam {
  name: string;
  price: string;
  description: string;
}
export const storeProduct = (param: IProductParam) => {
  return axios.post(Url.storeProduct, param);
};
